import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { ContainerDecorator } from '../../domain/container-decorator';

export abstract class ContainerDecoratorRepository {
  abstract create(
    data: Omit<ContainerDecorator, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<ContainerDecorator>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<ContainerDecorator[]>;

  abstract findById(
    id: ContainerDecorator['id'],
  ): Promise<NullableType<ContainerDecorator>>;

  abstract update(
    id: ContainerDecorator['id'],
    payload: DeepPartial<ContainerDecorator>,
  ): Promise<ContainerDecorator | null>;

  abstract remove(id: ContainerDecorator['id']): Promise<void>;
}
