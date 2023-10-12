import PropTypes from 'prop-types';
import { postedAt } from '../utils';

export default function Comments({ comments, authUser }) {
  return (
    <>
      {comments.map((comment) => (
        <div
          key={comment.id}
          className={`chat ${
            comment.owner.id === authUser.id ? 'chat-end' : 'chat-start'
          }`}
        >
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src={comment.owner.avatar} alt="User Avatar" />
            </div>
          </div>
          <div className="chat-header">
            {comment.owner.id === authUser.id ? (
              <>
                <time className="text-xs m-1 opacity-50">
                  {postedAt(comment.createdAt)}
                </time>
                {comment.owner.name}
              </>
            ) : (
              <>
                {comment.owner.name}
                <time className="text-xs m-1 opacity-50">
                  {postedAt(comment.createdAt)}
                </time>
              </>
            )}
          </div>
          <h1
            className={` chat-bubble  ${
              comment.owner.id === authUser.id ? 'chat-bubble-primary' : null
            }`}
          >
            {comment.content}
          </h1>
        </div>
      ))}
    </>
  );
}

Comments.propTypes = {
  comments: PropTypes.array,
  authUser: PropTypes.object,
};
