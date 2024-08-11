import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameAppEntity } from '../entities/game-app.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { GameApp } from '../../../../domain/game-app';
import { GameAppRepository } from '../../game-app.repository';
import { GameAppMapper } from '../mappers/game-app.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';

@Injectable()
export class GameAppRelationalRepository implements GameAppRepository {
  constructor(
    @InjectRepository(GameAppEntity)
    private readonly gameAppRepository: Repository<GameAppEntity>,
  ) {}

  async create(data: GameApp): Promise<GameApp> {
    const persistenceModel = GameAppMapper.toPersistence(data);
    const newEntity = await this.gameAppRepository.save(
      this.gameAppRepository.create(persistenceModel),
    );
    return GameAppMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<GameApp[]> {
    const entities = await this.gameAppRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((user) => GameAppMapper.toDomain(user));
  }

  async findById(id: GameApp['id']): Promise<NullableType<GameApp>> {
    const entity = await this.gameAppRepository.findOne({
      where: { id },
    });

    return entity ? GameAppMapper.toDomain(entity) : null;
  }

  async update(id: GameApp['id'], payload: Partial<GameApp>): Promise<GameApp> {
    const entity = await this.gameAppRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Record not found');
    }

    const updatedEntity = await this.gameAppRepository.save(
      this.gameAppRepository.create(
        GameAppMapper.toPersistence({
          ...GameAppMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return GameAppMapper.toDomain(updatedEntity);
  }

  async remove(id: GameApp['id']): Promise<void> {
    await this.gameAppRepository.delete(id);
  }
}
