import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContainerDecoratorEntity } from '../entities/container-decorator.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { ContainerDecorator } from '../../../../domain/container-decorator';
import { ContainerDecoratorRepository } from '../../container-decorator.repository';
import { ContainerDecoratorMapper } from '../mappers/container-decorator.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';

@Injectable()
export class ContainerDecoratorRelationalRepository
  implements ContainerDecoratorRepository
{
  constructor(
    @InjectRepository(ContainerDecoratorEntity)
    private readonly containerDecoratorRepository: Repository<ContainerDecoratorEntity>,
  ) {}

  async create(data: ContainerDecorator): Promise<ContainerDecorator> {
    const persistenceModel = ContainerDecoratorMapper.toPersistence(data);
    const newEntity = await this.containerDecoratorRepository.save(
      this.containerDecoratorRepository.create(persistenceModel),
    );
    return ContainerDecoratorMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<ContainerDecorator[]> {
    const entities = await this.containerDecoratorRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((user) => ContainerDecoratorMapper.toDomain(user));
  }

  async findById(
    id: ContainerDecorator['id'],
  ): Promise<NullableType<ContainerDecorator>> {
    const entity = await this.containerDecoratorRepository.findOne({
      where: { id },
    });

    return entity ? ContainerDecoratorMapper.toDomain(entity) : null;
  }

  async update(
    id: ContainerDecorator['id'],
    payload: Partial<ContainerDecorator>,
  ): Promise<ContainerDecorator> {
    const entity = await this.containerDecoratorRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Record not found');
    }

    const updatedEntity = await this.containerDecoratorRepository.save(
      this.containerDecoratorRepository.create(
        ContainerDecoratorMapper.toPersistence({
          ...ContainerDecoratorMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return ContainerDecoratorMapper.toDomain(updatedEntity);
  }

  async remove(id: ContainerDecorator['id']): Promise<void> {
    await this.containerDecoratorRepository.delete(id);
  }
}
