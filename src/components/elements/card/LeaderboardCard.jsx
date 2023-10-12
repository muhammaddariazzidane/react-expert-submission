import PropTypes from 'prop-types';

export default function LeaderboardCard({ index, leaderboard }) {
  return (
    <div className="flex hover:bg-primary hover:text-white transition-colors duration-300  p-2 rounded-md justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="avatar placeholder">
          <h1 className="items-center m-auto text-base pr-2 font-semibold">
            {index + 1}.
          </h1>
          <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
            <img src={leaderboard.user.avatar} alt={leaderboard.user.name} />
          </div>
        </div>
        <h1 className="text-base capitalize font-semibold">
          {leaderboard.user.name}
        </h1>
      </div>
      <div>
        <span className="text-base font-semibold">{leaderboard.score}</span>
      </div>
    </div>
  );
}

LeaderboardCard.propTypes = {
  index: PropTypes.number,
  leaderboard: PropTypes.object,
};
