import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { RewardImage } from '../../domain/reward-image';

export abstract class RewardImageRepository {
  abstract create(
    data: Omit<RewardImage, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<RewardImage>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<RewardImage[]>;

  abstract findById(id: RewardImage['id']): Promise<NullableType<RewardImage>>;

  abstract update(
    id: RewardImage['id'],
    payload: DeepPartial<RewardImage>,
  ): Promise<RewardImage | null>;

  abstract remove(id: RewardImage['id']): Promise<void>;
}
