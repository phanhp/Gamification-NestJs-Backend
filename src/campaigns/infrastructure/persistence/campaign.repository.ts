import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { Campaign } from '../../domain/campaign';

export abstract class CampaignRepository {
  abstract create(
    data: Omit<Campaign, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Campaign>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Campaign[]>;

  abstract findById(id: Campaign['id']): Promise<NullableType<Campaign>>;

  abstract update(
    id: Campaign['id'],
    payload: DeepPartial<Campaign>,
  ): Promise<Campaign | null>;

  abstract remove(id: Campaign['id']): Promise<void>;
}
