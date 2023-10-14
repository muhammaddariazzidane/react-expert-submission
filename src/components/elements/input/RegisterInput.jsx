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

export default function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
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
        Register
      </Heading>
      <FormControl isRequired>
        <FormLabel>Username</FormLabel>

        <Input
          type="text"
          value={name}
          onChange={onNameChange}
          placeholder="Name"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Username</FormLabel>

        <Input
          type="text"
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Username</FormLabel>

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
        variant={'solid'}
        role={'button'}
        name={'Register'}
        colorScheme={'whatsapp'}
        onClick={() => register({ name, email, password })}
      >
        Register
      </Button>
      <Flex justify={'end'} gap={1}>
        <p>Already account? </p>
        <Link to={'/login'}> Login</Link>
      </Flex>
    </Box>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
