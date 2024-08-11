import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RewardEntity } from '../entities/reward.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { Reward } from '../../../../domain/reward';
import { RewardRepository } from '../../reward.repository';
import { RewardMapper } from '../mappers/reward.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';

@Injectable()
export class RewardRelationalRepository implements RewardRepository {
  constructor(
    @InjectRepository(RewardEntity)
    private readonly rewardRepository: Repository<RewardEntity>,
  ) {}

  async create(data: Reward): Promise<Reward> {
    const persistenceModel = RewardMapper.toPersistence(data);
    const newEntity = await this.rewardRepository.save(
      this.rewardRepository.create(persistenceModel),
    );
    return RewardMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Reward[]> {
    const entities = await this.rewardRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((user) => RewardMapper.toDomain(user));
  }

  async findById(id: Reward['id']): Promise<NullableType<Reward>> {
    const entity = await this.rewardRepository.findOne({
      where: { id },
    });

    return entity ? RewardMapper.toDomain(entity) : null;
  }

  async update(id: Reward['id'], payload: Partial<Reward>): Promise<Reward> {
    const entity = await this.rewardRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Record not found');
    }

    const updatedEntity = await this.rewardRepository.save(
      this.rewardRepository.create(
        RewardMapper.toPersistence({
          ...RewardMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return RewardMapper.toDomain(updatedEntity);
  }

  async remove(id: Reward['id']): Promise<void> {
    await this.rewardRepository.delete(id);
  }
}
