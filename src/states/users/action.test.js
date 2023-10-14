import { describe, expect, it } from 'vitest';
import { ActionType, receiveUsersActionCreator } from './action';

describe('receiveUsersActionCreator', () => {
  it('should return an action with the correct type and payload', () => {
    const users = [
      {
        id: 'user-aROWej8yYA1sOfHN',
        name: 'Dicoding',
        email: 'admin@dicoding.com',
        avatar: 'https://ui-avatars.com/api/?name=Dicoding&background=random',
      },
    ];

    const expectedAction = {
      type: ActionType.RECEIVE_USERS,
      payload: {
        users,
      },
    };

    const actualAction = receiveUsersActionCreator(users);

    expect(actualAction).toEqual(expectedAction);
  });
});
