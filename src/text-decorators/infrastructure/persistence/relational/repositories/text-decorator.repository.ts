import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TextDecoratorEntity } from '../entities/text-decorator.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { TextDecorator } from '../../../../domain/text-decorator';
import { TextDecoratorRepository } from '../../text-decorator.repository';
import { TextDecoratorMapper } from '../mappers/text-decorator.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';

@Injectable()
export class TextDecoratorRelationalRepository
  implements TextDecoratorRepository
{
  constructor(
    @InjectRepository(TextDecoratorEntity)
    private readonly textDecoratorRepository: Repository<TextDecoratorEntity>,
  ) {}

  async create(data: TextDecorator): Promise<TextDecorator> {
    const persistenceModel = TextDecoratorMapper.toPersistence(data);
    const newEntity = await this.textDecoratorRepository.save(
      this.textDecoratorRepository.create(persistenceModel),
    );
    return TextDecoratorMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<TextDecorator[]> {
    const entities = await this.textDecoratorRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((user) => TextDecoratorMapper.toDomain(user));
  }

  async findById(
    id: TextDecorator['id'],
  ): Promise<NullableType<TextDecorator>> {
    const entity = await this.textDecoratorRepository.findOne({
      where: { id },
    });

    return entity ? TextDecoratorMapper.toDomain(entity) : null;
  }

  async update(
    id: TextDecorator['id'],
    payload: Partial<TextDecorator>,
  ): Promise<TextDecorator> {
    const entity = await this.textDecoratorRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Record not found');
    }

    const updatedEntity = await this.textDecoratorRepository.save(
      this.textDecoratorRepository.create(
        TextDecoratorMapper.toPersistence({
          ...TextDecoratorMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return TextDecoratorMapper.toDomain(updatedEntity);
  }

  async remove(id: TextDecorator['id']): Promise<void> {
    await this.textDecoratorRepository.delete(id);
  }
}
