import { PiChatsDuotone } from 'react-icons/pi';
import { GiCrenelCrown } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import BottomNavItem from './navigation/BottomNavItem';
import PropTypes from 'prop-types';

export default function BottomNavbar({ signOut }) {
  return (
    <div className="btm-nav bg-white z-[99] lg:hidden">
      <BottomNavItem
        Link={Link}
        PiChatsDuotone={PiChatsDuotone}
        GiCrenelCrown={GiCrenelCrown}
        signOut={signOut}
      />
    </div>
  );
}

BottomNavbar.propTypes = {
  signOut: PropTypes.func,
};
