import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ButtonDecoratorEntity } from '../entities/button-decorator.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { ButtonDecorator } from '../../../../domain/button-decorator';
import { ButtonDecoratorRepository } from '../../button-decorator.repository';
import { ButtonDecoratorMapper } from '../mappers/button-decorator.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';

@Injectable()
export class ButtonDecoratorRelationalRepository
  implements ButtonDecoratorRepository
{
  constructor(
    @InjectRepository(ButtonDecoratorEntity)
    private readonly buttonDecoratorRepository: Repository<ButtonDecoratorEntity>,
  ) {}

  async create(data: ButtonDecorator): Promise<ButtonDecorator> {
    const persistenceModel = ButtonDecoratorMapper.toPersistence(data);
    const newEntity = await this.buttonDecoratorRepository.save(
      this.buttonDecoratorRepository.create(persistenceModel),
    );
    return ButtonDecoratorMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<ButtonDecorator[]> {
    const entities = await this.buttonDecoratorRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((user) => ButtonDecoratorMapper.toDomain(user));
  }

  async findById(
    id: ButtonDecorator['id'],
  ): Promise<NullableType<ButtonDecorator>> {
    const entity = await this.buttonDecoratorRepository.findOne({
      where: { id },
    });

    return entity ? ButtonDecoratorMapper.toDomain(entity) : null;
  }

  async update(
    id: ButtonDecorator['id'],
    payload: Partial<ButtonDecorator>,
  ): Promise<ButtonDecorator> {
    const entity = await this.buttonDecoratorRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Record not found');
    }

    const updatedEntity = await this.buttonDecoratorRepository.save(
      this.buttonDecoratorRepository.create(
        ButtonDecoratorMapper.toPersistence({
          ...ButtonDecoratorMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return ButtonDecoratorMapper.toDomain(updatedEntity);
  }

  async remove(id: ButtonDecorator['id']): Promise<void> {
    await this.buttonDecoratorRepository.delete(id);
  }
}
