import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';
import LoginInput from '../components/LoginInput';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <div className="min-h-screen  flex items-center">
      <LoginInput login={onLogin} />
    </div>
  );
}

export default LoginPage;
