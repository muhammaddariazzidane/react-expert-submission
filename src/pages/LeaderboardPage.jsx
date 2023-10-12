import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import LeaderboardCard from '../components/elements/card/LeaderboardCard';
import Layout from '../layouts/Layout';

export default function LeaderboardPage() {
  const { leaderboards = [] } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  return (
    <Layout>
      <div className="min-h-screen  max-w-lg mx-auto">
        <div className="mb-12 min-h-screen">
          <h1 className="text-center text-3xl font-semibold my-8">
            Top Leaderboards
          </h1>
          <div className="w-full flex p-4 gap-4  flex-col rounded-md shadow">
            {leaderboards?.map((leaderboard, index) => (
              <LeaderboardCard
                key={leaderboard.user.id}
                index={index}
                leaderboard={leaderboard}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
