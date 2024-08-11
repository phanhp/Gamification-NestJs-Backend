import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { TextDecorator } from '../../domain/text-decorator';

export abstract class TextDecoratorRepository {
  abstract create(
    data: Omit<TextDecorator, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<TextDecorator>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<TextDecorator[]>;

  abstract findById(
    id: TextDecorator['id'],
  ): Promise<NullableType<TextDecorator>>;

  abstract update(
    id: TextDecorator['id'],
    payload: DeepPartial<TextDecorator>,
  ): Promise<TextDecorator | null>;

  abstract remove(id: TextDecorator['id']): Promise<void>;
}
