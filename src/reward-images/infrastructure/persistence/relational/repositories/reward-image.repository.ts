import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RewardImageEntity } from '../entities/reward-image.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { RewardImage } from '../../../../domain/reward-image';
import { RewardImageRepository } from '../../reward-image.repository';
import { RewardImageMapper } from '../mappers/reward-image.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';

@Injectable()
export class RewardImageRelationalRepository implements RewardImageRepository {
  constructor(
    @InjectRepository(RewardImageEntity)
    private readonly rewardImageRepository: Repository<RewardImageEntity>,
  ) {}

  async create(data: RewardImage): Promise<RewardImage> {
    const persistenceModel = RewardImageMapper.toPersistence(data);
    const newEntity = await this.rewardImageRepository.save(
      this.rewardImageRepository.create(persistenceModel),
    );
    return RewardImageMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<RewardImage[]> {
    const entities = await this.rewardImageRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((user) => RewardImageMapper.toDomain(user));
  }

  async findById(id: RewardImage['id']): Promise<NullableType<RewardImage>> {
    const entity = await this.rewardImageRepository.findOne({
      where: { id },
    });

    return entity ? RewardImageMapper.toDomain(entity) : null;
  }

  async update(
    id: RewardImage['id'],
    payload: Partial<RewardImage>,
  ): Promise<RewardImage> {
    const entity = await this.rewardImageRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Record not found');
    }

    const updatedEntity = await this.rewardImageRepository.save(
      this.rewardImageRepository.create(
        RewardImageMapper.toPersistence({
          ...RewardImageMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return RewardImageMapper.toDomain(updatedEntity);
  }

  async remove(id: RewardImage['id']): Promise<void> {
    await this.rewardImageRepository.delete(id);
  }
}
