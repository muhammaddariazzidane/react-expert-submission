import { GiCrenelCrown } from 'react-icons/gi';
import { PiChatsDuotone } from 'react-icons/pi';
import { IoIosLogOut } from 'react-icons/io';
import { Link } from 'react-router-dom';
import NavItem from './navigation/NavItem';
import PropTypes from 'prop-types';

export default function Navbar({ signOut }) {
  return (
    <div className="navbar shadow px-5">
      <div className="navbar-start">
        <Link to={'/'} className="btn btn-ghost normal-case text-xl">
          Threads Skuyyy
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <NavItem
            Link={Link}
            GiCrenelCrown={GiCrenelCrown}
            PiChatsDuotone={PiChatsDuotone}
          />
        </ul>
      </div>
      <div className="navbar-end">
        <button
          onClick={signOut}
          className="btn border-none rounded-full  lg:block hidden btn-error btn-sm"
        >
          <IoIosLogOut size={20} />
        </button>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  signOut: PropTypes.func,
};
