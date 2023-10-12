import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { asyncAddThread } from '../states/threads/action';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
import { BiLike, BiDislike, BiShare, BiComment } from 'react-icons/bi';
import CreateForm from '../components/elements/form/CreateForm';
import Layout from '../layouts/Layout';
import DiscussionCard from '../components/elements/card/DiscussionCard';
import PropTypes from 'prop-types';
import LeaderboardCard from '../components/elements/card/LeaderboardCard';

export default function HomePage({ authUser, signOut }) {
  const {
    threads = [],
    users = [],
    leaderboards = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onAddThread = (title, body, category = '') => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser,
  }));

  return (
    <Layout signOut={signOut}>
      <div className="flex w-full mt-2 justify-center space-x-4">
        <div className="shadow p-4 w-[85%] min-h-screen  lg:mb-0 mb-14 max-w-3xl">
          <div className="flex shadow p-4 rounded-xl justify-center gap-2">
            <div className="lg:block hidden">
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                  <img src={authUser.avatar} alt={authUser.name} />
                </div>
              </div>
            </div>
            <CreateForm
              addThread={onAddThread}
              MdOutlineEmojiEmotions={MdOutlineEmojiEmotions}
            />
          </div>
          <h1 className="text-xl mt-4 text-center font-semibold">
            Diskusi Tersedia
          </h1>
          <hr className="my-3 " />

          <DiscussionCard
            BiComment={BiComment}
            BiDislike={BiDislike}
            BiLike={BiLike}
            BiShare={BiShare}
            threads={threadList}
          />
        </div>
        <div className=" w-[15%] lg:block hidden h-full  rounded-lg ">
          <div className="w-full shadow rounded-md pb-2">
            <h1 className="font-semibold  mt-2 text-base text-center">Top 3</h1>
            <h1 className="font-semibold   text-base text-center">
              Leaderboard
            </h1>
            <hr className="mt-3" />
            <div className="w-full flex p-2 gap-4  flex-col">
              {leaderboards?.slice(0, 3).map((leaderboard, index) => (
                <LeaderboardCard
                  index={index}
                  key={leaderboard.user.id}
                  leaderboard={leaderboard}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

HomePage.propTypes = {
  authUser: PropTypes.object,
  signOut: PropTypes.func,
};
