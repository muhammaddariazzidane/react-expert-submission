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
import { Box, Container } from '@chakra-ui/react';

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
      <Container maxW={'container.md'} mb={12} py={4} px={6} mx={'auto'}>
        <ThreadDetail thread={threadDetail} />
        <Box my={3} shadow={'md'} rounded={'full'}>
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
        </Box>
        <Comments comments={threadDetail.comments} authUser={authUser} />
      </Container>
    </Layout>
  );
}

export default DetailPage;

DetailPage.propTypes = {
  authUser: PropTypes.object,
};
