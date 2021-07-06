import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getAllGames', () => {
    it('should return all games', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getAllGames().map((g) => g.id)).toEqual([
        'settlers-in-the-can',
        'chess-pie',
        'purrfection',
      ]);
    });
  });

  describe('getGame', () => {
    it('should return game by id', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getGame('settlers-in-the-can')).toEqual(
        expect.objectContaining({
          id: 'settlers-in-the-can',
          name: 'Settlers in the Can',
          image: '/assets/beans.png', // 'https://media.giphy.com/media/xUNda3pLJEsg4Nedji/giphy.gif',
        })
      );
    });
  });
});
