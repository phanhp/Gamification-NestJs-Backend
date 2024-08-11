import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { Reward } from '../../domain/reward';

export abstract class RewardRepository {
  abstract create(
    data: Omit<Reward, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Reward>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Reward[]>;

  abstract findById(id: Reward['id']): Promise<NullableType<Reward>>;

  abstract update(
    id: Reward['id'],
    payload: DeepPartial<Reward>,
  ): Promise<Reward | null>;

  abstract remove(id: Reward['id']): Promise<void>;
}
