import { Injectable } from '@nestjs/common';
import { CreateRewardDto } from './dto/create-reward.dto';
import { UpdateRewardDto } from './dto/update-reward.dto';
import { RewardRepository } from './infrastructure/persistence/reward.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Reward } from './domain/reward';

@Injectable()
export class RewardsService {
  constructor(private readonly rewardRepository: RewardRepository) {}

  create(createRewardDto: CreateRewardDto) {
    return this.rewardRepository.create(createRewardDto);
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.rewardRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: Reward['id']) {
    return this.rewardRepository.findById(id);
  }

  update(id: Reward['id'], updateRewardDto: UpdateRewardDto) {
    return this.rewardRepository.update(id, updateRewardDto);
  }

  remove(id: Reward['id']) {
    return this.rewardRepository.remove(id);
  }
}
