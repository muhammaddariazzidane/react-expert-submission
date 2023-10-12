import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import DetailPage from './pages/DetailPage';
import LeaderboardPage from './pages/LeaderboardPage';
import LoadingBar from 'react-redux-loading-bar';

function App() {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <LoadingBar showFastActions />
        <Routes>
          <Route path="/*" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <LoadingBar showFastActions />
      <Routes>
        <Route
          path="/"
          element={<HomePage authUser={authUser} signOut={onSignOut} />}
        />
        <Route
          path="/thread/:id"
          element={<DetailPage authUser={authUser} />}
        />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
      </Routes>
    </>
  );
}

export default App;
