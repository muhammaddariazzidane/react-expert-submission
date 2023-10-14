import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { asyncPopulateUsersAndThreads } from './action';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { receiveUsersActionCreator } from '../users/action';
import { receiveThreadsActionCreator } from '../threads/action';
import api from '../../utils/api';
import { receiveLeaderboardsActionCreator } from '../leaderboards/action';

const fakeThreadsResponse = [
  {
    id: 'thread-Nqp47p4jhUXYhrhRn',
    title: 'Bagaimana pengalamanmu belajar Redux?',
    body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
    category: 'redux',
    createdAt: '2023-05-29T07:55:52.266Z',
    ownerId: 'user-mQhLzINW_w5TxxYf',
    totalComments: 0,
    upVotesBy: [],
    downVotesBy: [],
  },
];

const fakeUsersResponse = [
  {
    id: 'user-aROWej8yYA1sOfHN',
    name: 'Dicoding',
    email: 'admin@dicoding.com',
    avatar: 'https://ui-avatars.com/api/?name=Dicoding&background=random',
  },
];
const fakeLeaderboardsResponse = [
  {
    user: {
      id: 'user-mQhLzINW_w5TxxYf',
      name: 'Dimas Saputra',
      email: 'dimas@dicoding.com',
      avatar:
        'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
    },
    score: 25,
  },
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncPopulateUsersAndThreads thunk', () => {
  beforeEach(() => {
    api._getAllUsers = api.getAllUsers;
    api._getAllThreads = api.getAllThreads;
  });

  afterEach(() => {
    api.getAllUsers = api._getAllUsers;
    api.getAllThreads = api._getAllThreads;
    api.getLeaderboards = api._getLeaderboards;

    delete api._getAllUsers;
    delete api._getAllThreads;
    delete api._getLeaderboards;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    api.getAllUsers = () => Promise.resolve(fakeUsersResponse);
    api.getAllThreads = () => Promise.resolve(fakeThreadsResponse);
    api.getLeaderboards = () => Promise.resolve(fakeLeaderboardsResponse);

    const dispatch = vi.fn();

    await asyncPopulateUsersAndThreads()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadsActionCreator(fakeThreadsResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(
      receiveUsersActionCreator(fakeUsersResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardsActionCreator(fakeLeaderboardsResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
  it('should dispatch action correctly when data fetching success', async () => {
    api.getAllUsers = () => Promise.reject(fakeErrorResponse);
    api.getAllThreads = () => Promise.reject(fakeErrorResponse);
    api.getLeaderboards = () => Promise.reject(fakeErrorResponse);

    const dispatch = vi.fn();

    window.alert = vi.fn();
    await asyncPopulateUsersAndThreads()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
