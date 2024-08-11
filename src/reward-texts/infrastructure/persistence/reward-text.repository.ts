import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { RewardText } from '../../domain/reward-text';

export abstract class RewardTextRepository {
  abstract create(
    data: Omit<RewardText, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<RewardText>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<RewardText[]>;

  abstract findById(id: RewardText['id']): Promise<NullableType<RewardText>>;

  abstract update(
    id: RewardText['id'],
    payload: DeepPartial<RewardText>,
  ): Promise<RewardText | null>;

  abstract remove(id: RewardText['id']): Promise<void>;
}
