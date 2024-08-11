import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { ColorDecorator } from '../../domain/color-decorator';

export abstract class ColorDecoratorRepository {
  abstract create(
    data: Omit<ColorDecorator, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<ColorDecorator>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<ColorDecorator[]>;

  abstract findById(
    id: ColorDecorator['id'],
  ): Promise<NullableType<ColorDecorator>>;

  abstract update(
    id: ColorDecorator['id'],
    payload: DeepPartial<ColorDecorator>,
  ): Promise<ColorDecorator | null>;

  abstract remove(id: ColorDecorator['id']): Promise<void>;
}
