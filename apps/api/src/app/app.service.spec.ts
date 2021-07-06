import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getAllGames', () => {
    it('should return all games', () => {
      expect(service.getAllGames().map((g) => g.id)).toEqual([
        'settlers-in-the-can',
        'chess-pie',
        'purrfection',
      ]);
    });
  });

  describe('getGame', () => {
    it('should return game by id', () => {
      expect(service.getGame('settlers-in-the-can')).toEqual(
        expect.objectContaining({
          id: 'settlers-in-the-can',
          name: 'Settlers in the Can',
          image: '/assets/beans.png', // 'https://media.giphy.com/media/xUNda3pLJEsg4Nedji/giphy.gif',
        })
      );
    });
  });
});
