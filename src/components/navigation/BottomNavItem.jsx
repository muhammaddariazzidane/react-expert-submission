import PropTypes from 'prop-types';
import { IoIosLogOut } from 'react-icons/io';

export default function BottomNavItem(props) {
  const { PiChatsDuotone, Link, GiCrenelCrown, signOut } = props;

  return (
    <>
      <Link to={'/'} className={location.pathname == '/' ? 'active' : null}>
        <PiChatsDuotone size={22} color="green" />
        <span className="btm-nav-label">Threads</span>
      </Link>
      <Link
        to={'/leaderboard'}
        className={location.pathname == '/leaderboard' ? 'active' : null}
      >
        <GiCrenelCrown size={22} color="red" />
        <span className="btm-nav-label">Leaderboard</span>
      </Link>
      <button onClick={signOut} className="">
        <IoIosLogOut size={22} color="red" />
        <span className="btm-nav-label">Logout</span>
      </button>
    </>
  );
}

BottomNavItem.propTypes = {
  PiChatsDuotone: PropTypes.func,
  GiCrenelCrown: PropTypes.func,
  Link: PropTypes.object,
  signOut: PropTypes.func,
};
