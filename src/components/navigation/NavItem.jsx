import PropTypes from 'prop-types';

export default function NavItem(props) {
  const { Link, PiChatsDuotone, GiCrenelCrown } = props;

  return (
    <>
      <li>
        <Link
          to={'/'}
          className={`flex items-center rounded-md  ${
            location.pathname == '/' ? 'active shadow  ' : null
          }`}
        >
          <PiChatsDuotone size={22} color="green" />
          Threads
        </Link>
      </li>
      <li>
        <Link
          to={'/leaderboard'}
          className={`flex items-center rounded-md ${
            location.pathname == '/leaderboard' ? 'active shadow ' : null
          }`}
        >
          <GiCrenelCrown size={22} color="red" />
          Leaderboard
        </Link>
      </li>
    </>
  );
}

NavItem.propTypes = {
  Link: PropTypes.object,
  PiChatsDuotone: PropTypes.func,
  GiCrenelCrown: PropTypes.func,
};
