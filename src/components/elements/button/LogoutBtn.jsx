import { Button } from '@chakra-ui/react';
import { IoIosLogOut } from 'react-icons/io';
import PropTypes from 'prop-types';

export default function LogoutBtn({ signOut }) {
  return (
    <Button
      onClick={signOut}
      variant={'solid'}
      colorScheme={'red'}
      size={'md'}
      p={0}
      pl={1}
      name={'Logout'}
    >
      <IoIosLogOut size={24} />
    </Button>
  );
}

LogoutBtn.propTypes = {
  signOut: PropTypes.func,
};
