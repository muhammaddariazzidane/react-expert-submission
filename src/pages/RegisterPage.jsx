import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';
import { Box } from '@chakra-ui/react';
import RegisterInput from '../components/elements/input/RegisterInput';

export default function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));

    navigate('/');
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
      <RegisterInput register={onRegister} />
    </Box>
  );
}
