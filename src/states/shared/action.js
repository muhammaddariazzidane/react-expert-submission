import api from '../../utils/api';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { receiveLeaderboardsActionCreator } from '../leaderboards/action';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';

function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();
      const leaderboards = await api.getLeaderboards();

      dispatch(receiveLeaderboardsActionCreator(leaderboards));
      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export { asyncPopulateUsersAndThreads };
