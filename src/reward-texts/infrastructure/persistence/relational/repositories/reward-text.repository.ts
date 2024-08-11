import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RewardTextEntity } from '../entities/reward-text.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { RewardText } from '../../../../domain/reward-text';
import { RewardTextRepository } from '../../reward-text.repository';
import { RewardTextMapper } from '../mappers/reward-text.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';

@Injectable()
export class RewardTextRelationalRepository implements RewardTextRepository {
  constructor(
    @InjectRepository(RewardTextEntity)
    private readonly rewardTextRepository: Repository<RewardTextEntity>,
  ) {}

  async create(data: RewardText): Promise<RewardText> {
    const persistenceModel = RewardTextMapper.toPersistence(data);
    const newEntity = await this.rewardTextRepository.save(
      this.rewardTextRepository.create(persistenceModel),
    );
    return RewardTextMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<RewardText[]> {
    const entities = await this.rewardTextRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((user) => RewardTextMapper.toDomain(user));
  }

  async findById(id: RewardText['id']): Promise<NullableType<RewardText>> {
    const entity = await this.rewardTextRepository.findOne({
      where: { id },
    });

    return entity ? RewardTextMapper.toDomain(entity) : null;
  }

  async update(
    id: RewardText['id'],
    payload: Partial<RewardText>,
  ): Promise<RewardText> {
    const entity = await this.rewardTextRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Record not found');
    }

    const updatedEntity = await this.rewardTextRepository.save(
      this.rewardTextRepository.create(
        RewardTextMapper.toPersistence({
          ...RewardTextMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return RewardTextMapper.toDomain(updatedEntity);
  }

  async remove(id: RewardText['id']): Promise<void> {
    await this.rewardTextRepository.delete(id);
  }
}
