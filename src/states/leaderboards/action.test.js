import { ActionType, receiveLeaderboardsActionCreator } from './action';
import { describe, it, expect } from 'vitest';

describe('receiveLeaderboardsActionCreator', () => {
  it('should create an action to receive leaderboards', () => {
    const leaderboards = [
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

    const action = receiveLeaderboardsActionCreator(leaderboards);

    expect(action).toMatchObject({
      type: ActionType.RECEIVE_LEADERBOARDS,
      payload: {
        leaderboards,
      },
    });
  });
});
