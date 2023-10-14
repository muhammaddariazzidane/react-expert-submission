import { describe, it, expect } from 'vitest';
import { ActionType } from './action';
import leaderboardsReducer from './reducer';

describe('leaderboardsReducer function', () => {
  it('should return the initial state when given an unknown action', () => {
    const initialState = [];
    const action = { type: 'UNKNOWN' };
    const nextState = leaderboardsReducer(initialState, action);
    expect(nextState).toEqual(initialState);
  });

  it('Update the state when receiving RECEIVE_LEADERBOARDS action', () => {
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_LEADERBOARDS,
      payload: {
        leaderboards: [
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
        ],
      },
    };
    const nextState = leaderboardsReducer(initialState, action);
    expect(nextState).toEqual([
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
    ]);
  });
});
