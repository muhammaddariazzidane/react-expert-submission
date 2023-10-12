import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  asyncReceiveThreadDetail,
  asyncAddComment,
} from '../states/threadDetail/action';
import CreateCommentForm from '../components/elements/form/CreateCommentForm';
import Comments from '../components/Comments';
import ThreadDetail from '../components/ThreadDetail';
import Layout from '../layouts/Layout';
import PropTypes from 'prop-types';

function DetailPage({ authUser }) {
  const { id } = useParams();
  const { threadDetail = null } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const commentTextareaRef = useRef(null);

  const handleCommentSubmit = (threadId, content) => {
    dispatch(asyncAddComment({ threadId, content }));
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <Layout>
      <div className="max-w-3xl mb-14 px-6 w-full py-4 mx-auto">
        <ThreadDetail thread={threadDetail} />
        <div className="my-3 shadow rounded-md">
          <CreateCommentForm
            handleSubmit={(e) => {
              e.preventDefault();
              const content = commentTextareaRef.current.value;
              if (content.trim() !== '') {
                handleCommentSubmit(id, content);
                commentTextareaRef.current.value = '';
              }
            }}
            commentTextareaRef={commentTextareaRef}
          />
        </div>
        <Comments comments={threadDetail.comments} authUser={authUser} />
      </div>
    </Layout>
  );
}

export default DetailPage;

DetailPage.propTypes = {
  authUser: PropTypes.object,
};
