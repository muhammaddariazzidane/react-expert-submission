import { Box } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import PropTypes from 'prop-types';

export default function Layout({ children, signOut }) {
  return (
    <>
      <Navbar signOut={signOut} />
      <Box as={'main'} minH={'full'} w={'full'}>
        {children}
      </Box>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
  signOut: PropTypes.func,
};
