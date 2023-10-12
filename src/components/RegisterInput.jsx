import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { Link } from 'react-router-dom';

export default function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="flex max-w-sm w-full p-5 shadow rounded-md mx-auto  flex-col gap-4">
      <h1 className="text-center text-2xl font-semibold">Register</h1>

      <input
        type="text"
        value={name}
        onChange={onNameChange}
        placeholder="Name"
        className="input max-w-sm w-full input-primary"
      />
      <input
        type="text"
        value={email}
        onChange={onEmailChange}
        placeholder="email"
        className="input max-w-sm w-full input-primary"
      />
      <input
        type="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
        className="input max-w-sm w-full input-primary"
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => register({ name, email, password })}
      >
        Register
      </button>
      <div className="flex justify-end">
        <p className="mr-1">Already account? </p>
        <Link to={'/login'}> Login</Link>
      </div>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
