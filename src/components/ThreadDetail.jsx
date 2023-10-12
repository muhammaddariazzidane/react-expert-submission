import { BiComment } from 'react-icons/bi';
import { postedAt } from '../utils';
import PropTypes from 'prop-types';

export default function ThreadDetail({ thread }) {
  return (
    <div className="w-full shadow rounded-md p-6">
      <h1 className="text-center font-semibold text-2xl">{thread.title}</h1>
      <p className="pt-7">{thread.body}</p>
      <div className="flex pt-5 justify-end gap-3">
        <div className="flex items-end gap-2">
          <div className="flex items-end">
            <BiComment size={20} className="mr-1" />
            {thread.comments.length}
          </div>
          <div>
            <h1>{thread.owner.name}</h1>
          </div>
          <div className="avatar">
            <div className="w-5 rounded-full">
              <img src={thread.owner.avatar} alt="User Avatar" />
            </div>
          </div>
          <div>
            <p className="text-sm">{postedAt(thread.createdAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

ThreadDetail.propTypes = {
  thread: PropTypes.object,
};
