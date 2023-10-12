import { AiOutlineSend } from 'react-icons/ai';
import PropTypes from 'prop-types';

export default function CreateCommentForm(props) {
  const { handleSubmit, commentTextareaRef } = props;
  return (
    <form onSubmit={handleSubmit} className="join w-full">
      <input
        ref={commentTextareaRef}
        className="input focus:outline-none w-full join-item"
        placeholder="Write a comment"
      />
      <button
        type="submit"
        className="btn join-item btn-neutral w-12 text-xs capitalize btn-sm mt-1 h-10 rounded-r-full"
      >
        <AiOutlineSend size={25} />
      </button>
    </form>
  );
}

CreateCommentForm.propTypes = {
  handleSubmit: PropTypes.func,
  commentTextareaRef: PropTypes.object,
};
