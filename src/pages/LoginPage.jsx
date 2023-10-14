import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';
import { Box } from '@chakra-ui/react';
import LoginInput from '../components/elements/input/LoginInput';

export default function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <Box
      maxW={'md'}
      minH={'100vh'}
      alignItems={'center'}
      display={'flex'}
      mx={'auto'}
      p={6}
    >
      <LoginInput login={onLogin} />
    </Box>
  );
}
