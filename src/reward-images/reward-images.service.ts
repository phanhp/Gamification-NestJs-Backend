import { Injectable } from '@nestjs/common';
import { CreateRewardImageDto } from './dto/create-reward-image.dto';
import { UpdateRewardImageDto } from './dto/update-reward-image.dto';
import { RewardImageRepository } from './infrastructure/persistence/reward-image.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { RewardImage } from './domain/reward-image';

@Injectable()
export class RewardImagesService {
  constructor(private readonly rewardImageRepository: RewardImageRepository) {}

  create(createRewardImageDto: CreateRewardImageDto) {
    return this.rewardImageRepository.create(createRewardImageDto);
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.rewardImageRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: RewardImage['id']) {
    return this.rewardImageRepository.findById(id);
  }

  update(id: RewardImage['id'], updateRewardImageDto: UpdateRewardImageDto) {
    return this.rewardImageRepository.update(id, updateRewardImageDto);
  }

  remove(id: RewardImage['id']) {
    return this.rewardImageRepository.remove(id);
  }
}
