import { describe, expect, it } from 'vitest';
import { ActionType, receiveThreadsActionCreator } from './action';

describe('receiveThreadsActionCreator', () => {
  it('should return an action with the correct type and payload', () => {
    const threads = [
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
      {
        id: 'thread-91KocEqYPRz68MhD',
        title: 'Halo! Selamat datang dan silakan perkenalkan diri kamu',
        body: '<div>Bagaimana kabarmu? Semoga baik-baik saja ya. Sekali lagi saya ucapkan selamat datang semuanya!</div><div><br></div><div>Seperti yang sudah disampaikan sebelumnya, pada diskusi ini kamu bisa memperkenalkan diri kamu dan juga berkenalan dengan teman sekelas lainnya.</div><div><br></div><div>Berhubungan baik dengan teman sekelas dan instruktur merupakan bagian penting dari pembelajaran di kelas ini, karena mereka dapat membantu jika kamu mengalami kendala dalam mempelajari dan memahami materi.&nbsp;&nbsp;</div><div><br></div><div>Oleh karena itu, luangkanlah waktumu untuk saling mengenal dan mencairkan suasana. Membangun interaksi dengan siswa lain akan membuat pengalaman belajar kamu jauh lebih menyenangkan dan menarik.&nbsp;</div><div><br></div><div>Beberapa hal yang dapat kamu tulis pada perkenalan diri:</div><div><br></div><div>- Siapa kamu dan dari mana kamu berasal?</div><div>- Apa pekerjaan atau pendidikan kamu saat ini?</div><div>- Kenapa kamu mengambil pelatihan ini? Apakah mungkin karena kamu sedang mengejar perubahan dalam karir, atau lainnya?</div>',
        category: 'perkenalan',
        createdAt: '2023-05-29T07:54:35.746Z',
        ownerId: 'user-aROWej8yYA1sOfHN',
        totalComments: 1,
        upVotesBy: ['user-mQhLzINW_w5TxxYf'],
        downVotesBy: [],
      },
    ];

    const expectedAction = {
      type: ActionType.RECEIVE_THREADS,
      payload: {
        threads,
      },
    };

    const actualAction = receiveThreadsActionCreator(threads);

    expect(actualAction).toEqual(expectedAction);
  });
});
