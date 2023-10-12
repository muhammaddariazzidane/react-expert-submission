import { useRef, useState, useEffect } from 'react';
import { postedAt } from '../../../utils';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncAddComment } from '../../../states/threadDetail/action';
import CreateCommentForm from '../form/CreateCommentForm';
import PropTypes from 'prop-types';

export default function DiscussionCard(props) {
  const { BiComment, BiDislike, BiLike, BiShare, threads } = props;
  const [openCommentId, setOpenCommentId] = useState(null);
  const commentTextareaRef = useRef(null);
  const dispatch = useDispatch();

  const toggleModalComment = (id) => {
    setOpenCommentId(id === openCommentId ? null : id);
  };

  const handleCommentSubmit = (threadId, content) => {
    dispatch(asyncAddComment({ threadId, content }));
  };

  useEffect(() => {
    if (openCommentId !== null) {
      commentTextareaRef.current.focus();
    }
  }, [openCommentId]);

  return (
    <div className="flex mt-4 flex-col gap-4">
      {threads?.map((thread) => (
        <div key={thread.id}>
          <div className="card w-full shadow rounded-xl">
            <div className="card-body p-4">
              <div className="flex gap-x-2 items-center">
                <div className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                    <img src={thread.user.avatar} alt={thread.user.name} />
                  </div>
                </div>
                <h1 className="text-sm">#{thread.user.name}</h1>
                <small className="text-xs">{postedAt(thread.createdAt)}</small>
              </div>
              <div className="pl-10 -mt-2">
                <Link
                  to={`/thread/${thread.id}`}
                  className="card-title mb-1 text-lg"
                >
                  {thread.title}
                </Link>
                <p>{thread.body.substr(0, 120)}...</p>
              </div>
              <div className="card-actions justify-between">
                <div className="badge h-7 badge-ghost text-lime-700 ml-9">
                  #{thread.category ? thread.category : null}
                </div>
                <div className="flex gap-2">
                  <button className="flex gap-1 items-center">
                    <BiLike size={23} />
                    <span>0</span>
                  </button>
                  <button className="flex gap-1 items-center">
                    <BiDislike size={23} />
                    <span>0</span>
                  </button>
                  <button
                    onClick={() => toggleModalComment(thread.id)}
                    className="flex gap-1 items-center relative"
                  >
                    <BiComment size={23} />
                    <span>{thread.totalComments}</span>
                  </button>
                  <button className="flex gap-1 items-center">
                    <BiShare className="-scale-x-100" size={23} />
                    <span>0</span>
                  </button>
                </div>
              </div>
            </div>
            {openCommentId === thread.id && (
              <div className="w-full p-2 mt-2 border-t">
                <CreateCommentForm
                  handleSubmit={(e) => {
                    e.preventDefault();
                    const content = commentTextareaRef.current.value;
                    if (content.trim() !== '') {
                      handleCommentSubmit(thread.id, content);
                      commentTextareaRef.current.value = '';
                    }
                  }}
                  commentTextareaRef={commentTextareaRef}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

DiscussionCard.propTypes = {
  threads: PropTypes.array,
  BiComment: PropTypes.func,
  BiLike: PropTypes.func,
  BiDislike: PropTypes.func,
  BiShare: PropTypes.func,
};
