import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ColorDecoratorEntity } from '../entities/color-decorator.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { ColorDecorator } from '../../../../domain/color-decorator';
import { ColorDecoratorRepository } from '../../color-decorator.repository';
import { ColorDecoratorMapper } from '../mappers/color-decorator.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';

@Injectable()
export class ColorDecoratorRelationalRepository
  implements ColorDecoratorRepository
{
  constructor(
    @InjectRepository(ColorDecoratorEntity)
    private readonly colorDecoratorRepository: Repository<ColorDecoratorEntity>,
  ) {}

  async create(data: ColorDecorator): Promise<ColorDecorator> {
    const persistenceModel = ColorDecoratorMapper.toPersistence(data);
    const newEntity = await this.colorDecoratorRepository.save(
      this.colorDecoratorRepository.create(persistenceModel),
    );
    return ColorDecoratorMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<ColorDecorator[]> {
    const entities = await this.colorDecoratorRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((user) => ColorDecoratorMapper.toDomain(user));
  }

  async findById(
    id: ColorDecorator['id'],
  ): Promise<NullableType<ColorDecorator>> {
    const entity = await this.colorDecoratorRepository.findOne({
      where: { id },
    });

    return entity ? ColorDecoratorMapper.toDomain(entity) : null;
  }

  async update(
    id: ColorDecorator['id'],
    payload: Partial<ColorDecorator>,
  ): Promise<ColorDecorator> {
    const entity = await this.colorDecoratorRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Record not found');
    }

    const updatedEntity = await this.colorDecoratorRepository.save(
      this.colorDecoratorRepository.create(
        ColorDecoratorMapper.toPersistence({
          ...ColorDecoratorMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return ColorDecoratorMapper.toDomain(updatedEntity);
  }

  async remove(id: ColorDecorator['id']): Promise<void> {
    await this.colorDecoratorRepository.delete(id);
  }
}
