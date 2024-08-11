import { Injectable } from '@nestjs/common';
import { CreateRewardTextDto } from './dto/create-reward-text.dto';
import { UpdateRewardTextDto } from './dto/update-reward-text.dto';
import { RewardTextRepository } from './infrastructure/persistence/reward-text.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { RewardText } from './domain/reward-text';

@Injectable()
export class RewardTextsService {
  constructor(private readonly rewardTextRepository: RewardTextRepository) {}

  create(createRewardTextDto: CreateRewardTextDto) {
    return this.rewardTextRepository.create(createRewardTextDto);
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.rewardTextRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: RewardText['id']) {
    return this.rewardTextRepository.findById(id);
  }

  update(id: RewardText['id'], updateRewardTextDto: UpdateRewardTextDto) {
    return this.rewardTextRepository.update(id, updateRewardTextDto);
  }

  remove(id: RewardText['id']) {
    return this.rewardTextRepository.remove(id);
  }
}
