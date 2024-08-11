import { Injectable } from '@nestjs/common';
import { CreateGameAppDto } from './dto/create-game-app.dto';
import { UpdateGameAppDto } from './dto/update-game-app.dto';
import { GameAppRepository } from './infrastructure/persistence/game-app.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { GameApp } from './domain/game-app';

@Injectable()
export class GameAppsService {
  constructor(private readonly gameAppRepository: GameAppRepository) {}

  create(createGameAppDto: CreateGameAppDto) {
    return this.gameAppRepository.create(createGameAppDto);
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.gameAppRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: GameApp['id']) {
    return this.gameAppRepository.findById(id);
  }

  update(id: GameApp['id'], updateGameAppDto: UpdateGameAppDto) {
    return this.gameAppRepository.update(id, updateGameAppDto);
  }

  remove(id: GameApp['id']) {
    return this.gameAppRepository.remove(id);
  }
}
