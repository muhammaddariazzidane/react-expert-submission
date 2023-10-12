import BottomNavbar from '../components/BottomNavbar';
import Navbar from '../components/Navbar';
import PropTypes from 'prop-types';

export default function Layout({ children, signOut }) {
  return (
    <>
      <Navbar signOut={signOut} />
      <main className="min-h-full w-full selection:bg-primary selection:text-white">
        {children}
      </main>
      <BottomNavbar signOut={signOut} />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
  signOut: PropTypes.func,
};
