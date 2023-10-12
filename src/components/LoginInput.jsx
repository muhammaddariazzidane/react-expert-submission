import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { Link } from 'react-router-dom';

export default function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="flex max-w-sm w-full p-5 shadow rounded-md mx-auto  flex-col gap-4">
      <h1 className="text-center text-2xl font-semibold">Login</h1>
      <input
        type="text"
        value={email}
        onChange={onEmailChange}
        placeholder="Username"
        className="input max-w-sm w-full input-primary"
      />
      <input
        type="password"
        value={password}
        onChange={onPasswordChange}
        className="input max-w-sm w-full input-primary"
        placeholder="Password"
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => login({ email, password })}
      >
        Login
      </button>
      <div className="flex justify-end">
        <p>Dont have account?</p>
        <Link to={'/register'}> Register</Link>
      </div>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};
