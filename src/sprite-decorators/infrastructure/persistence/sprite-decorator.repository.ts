import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { SpriteDecorator } from '../../domain/sprite-decorator';

export abstract class SpriteDecoratorRepository {
  abstract create(
    data: Omit<SpriteDecorator, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<SpriteDecorator>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<SpriteDecorator[]>;

  abstract findById(
    id: SpriteDecorator['id'],
  ): Promise<NullableType<SpriteDecorator>>;

  abstract update(
    id: SpriteDecorator['id'],
    payload: DeepPartial<SpriteDecorator>,
  ): Promise<SpriteDecorator | null>;

  abstract remove(id: SpriteDecorator['id']): Promise<void>;
}
