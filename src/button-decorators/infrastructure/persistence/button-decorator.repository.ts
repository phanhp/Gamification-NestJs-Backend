import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { ButtonDecorator } from '../../domain/button-decorator';

export abstract class ButtonDecoratorRepository {
  abstract create(
    data: Omit<ButtonDecorator, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<ButtonDecorator>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<ButtonDecorator[]>;

  abstract findById(
    id: ButtonDecorator['id'],
  ): Promise<NullableType<ButtonDecorator>>;

  abstract update(
    id: ButtonDecorator['id'],
    payload: DeepPartial<ButtonDecorator>,
  ): Promise<ButtonDecorator | null>;

  abstract remove(id: ButtonDecorator['id']): Promise<void>;
}
