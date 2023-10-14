import PropTypes from 'prop-types';
import useInput from '../../../hooks/useInput';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';

export default function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <Box
      w={'full'}
      display={'flex'}
      flexDir={'column'}
      gap={'4'}
      shadow={'md'}
      p={4}
    >
      <Heading as={'h1'} fontSize={'2xl'} textAlign={'center'}>
        Login
      </Heading>
      <FormControl isRequired>
        <FormLabel>Username</FormLabel>
        <Input
          type={'text'}
          value={email}
          onChange={onEmailChange}
          placeholder={'Username'}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
        />
      </FormControl>
      <Button
        mt={2}
        type={'button'}
        role={'button'}
        name={'Login'}
        variant={'solid'}
        colorScheme={'whatsapp'}
        onClick={() => login({ email, password })}
      >
        Login
      </Button>
      <Flex justify={'end'} gap={1}>
        <p>Dont have account?</p>
        <Link to={'/register'}>Register</Link>
      </Flex>
    </Box>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};
