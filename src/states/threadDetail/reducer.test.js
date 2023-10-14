import { describe, it, expect } from 'vitest';
import { ActionType } from './action';
import threadDetailReducer from './reducer';

describe('threadDetailReducer function', () => {
  it('should return the initial state when given an unknown action', () => {
    const initialState = null;
    const action = { type: 'UNKNOWN' };
    const nextState = threadDetailReducer(initialState, action);
    expect(nextState).toEqual(initialState);
  });

  it('Update the state when receiving RECEIVE_THREAD_DETAIL action', () => {
    const initialState = null;
    const action = {
      type: ActionType.RECEIVE_THREAD_DETAIL,
      payload: {
        threadDetail: {
          id: 'thread-Np47p4jhUXYhrhRn',
          title: 'Bagaimana pengalamanmu belajar Redux?',
          body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
          createdAt: '2023-05-29T07:55:52.266Z',
          owner: {
            id: 'user-mQhLzINW_w5TxxYf',
            name: 'Dimas Saputra',
            avatar:
              'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
          },
          category: 'redux',
          comments: [],
          upVotesBy: [],
          downVotesBy: [],
        },
      },
    };
    const nextState = threadDetailReducer(initialState, action);
    expect(nextState).toEqual({
      id: 'thread-Np47p4jhUXYhrhRn',
      title: 'Bagaimana pengalamanmu belajar Redux?',
      body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
      createdAt: '2023-05-29T07:55:52.266Z',
      owner: {
        id: 'user-mQhLzINW_w5TxxYf',
        name: 'Dimas Saputra',
        avatar:
          'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
      },
      category: 'redux',
      comments: [],
      upVotesBy: [],
      downVotesBy: [],
    });
  });

  it('Update the state when receiving ADD_COMMENT action', () => {
    const initialState = {
      id: 'thread-Np47p4jhUXYhrhRn',
      title: 'Bagaimana pengalamanmu belajar Redux?',
      body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
      createdAt: '2023-05-29T07:54:35.746Z',
      owner: {
        id: 'user-mQhLzINW_w5TxxYf',
        name: 'Dimas Saputra',
        avatar:
          'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
      },
      category: 'redux',
      comments: [],
      upVotesBy: [],
      downVotesBy: [],
    };
    const action = {
      type: ActionType.ADD_COMMENT,
      payload: {
        comment: {
          id: 'comment-XhqYiuyhZm1mWHqn',
          content: 'Hallo cuy ini tes testing',
          downVotesBy: [],
          upVotesBy: [],
          owner: {
            id: 'user-mQhLzINW_w5TxxYf',
            name: 'zidanecuy',
            avatar:
              'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
          },
          createdAt: '2023-05-29T07:59:04.689Z',
        },
      },
    };
    const nextState = threadDetailReducer(initialState, action);
    expect(nextState).toEqual({
      id: 'thread-Np47p4jhUXYhrhRn',
      title: 'Bagaimana pengalamanmu belajar Redux?',
      body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
      createdAt: '2023-05-29T07:54:35.746Z',
      owner: {
        id: 'user-mQhLzINW_w5TxxYf',
        name: 'Dimas Saputra',
        avatar:
          'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
      },
      category: 'redux',
      comments: [
        {
          id: 'comment-XhqYiuyhZm1mWHqn',
          content: 'Hallo cuy ini tes testing',
          downVotesBy: [],
          upVotesBy: [],
          owner: {
            id: 'user-mQhLzINW_w5TxxYf',
            name: 'zidanecuy',
            avatar:
              'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
          },
          createdAt: '2023-05-29T07:59:04.689Z',
        },
      ],
      upVotesBy: [],
      downVotesBy: [],
    });
  });
});
