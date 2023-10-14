import { describe, it, expect } from 'vitest';
import { ActionType } from './action';
import usersReducer from './reducer';

describe('usersReducer function', () => {
  it('should return the initial state when given an unknown action', () => {
    const initialState = [];
    const action = { type: 'UNKNOWN' };
    const nextState = usersReducer(initialState, action);
    expect(nextState).toEqual(initialState);
  });

  it('Update the state when receiving RECEIVE_USERS action', () => {
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_USERS,
      payload: {
        users: [
          {
            id: 'user-aROWej8yYA1sOfHN',
            name: 'Dicoding',
            email: 'admin@dicoding.com',
            avatar:
              'https://ui-avatars.com/api/?name=Dicoding&background=random',
          },
        ],
      },
    };
    const nextState = usersReducer(initialState, action);
    expect(nextState).toEqual([
      {
        id: 'user-aROWej8yYA1sOfHN',
        name: 'Dicoding',
        email: 'admin@dicoding.com',
        avatar: 'https://ui-avatars.com/api/?name=Dicoding&background=random',
      },
    ]);
  });
});
