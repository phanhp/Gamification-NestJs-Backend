import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SpriteDecoratorEntity } from '../entities/sprite-decorator.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { SpriteDecorator } from '../../../../domain/sprite-decorator';
import { SpriteDecoratorRepository } from '../../sprite-decorator.repository';
import { SpriteDecoratorMapper } from '../mappers/sprite-decorator.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';

@Injectable()
export class SpriteDecoratorRelationalRepository
  implements SpriteDecoratorRepository
{
  constructor(
    @InjectRepository(SpriteDecoratorEntity)
    private readonly spriteDecoratorRepository: Repository<SpriteDecoratorEntity>,
  ) {}

  async create(data: SpriteDecorator): Promise<SpriteDecorator> {
    const persistenceModel = SpriteDecoratorMapper.toPersistence(data);
    const newEntity = await this.spriteDecoratorRepository.save(
      this.spriteDecoratorRepository.create(persistenceModel),
    );
    return SpriteDecoratorMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<SpriteDecorator[]> {
    const entities = await this.spriteDecoratorRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((user) => SpriteDecoratorMapper.toDomain(user));
  }

  async findById(
    id: SpriteDecorator['id'],
  ): Promise<NullableType<SpriteDecorator>> {
    const entity = await this.spriteDecoratorRepository.findOne({
      where: { id },
    });

    return entity ? SpriteDecoratorMapper.toDomain(entity) : null;
  }

  async update(
    id: SpriteDecorator['id'],
    payload: Partial<SpriteDecorator>,
  ): Promise<SpriteDecorator> {
    const entity = await this.spriteDecoratorRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Record not found');
    }

    const updatedEntity = await this.spriteDecoratorRepository.save(
      this.spriteDecoratorRepository.create(
        SpriteDecoratorMapper.toPersistence({
          ...SpriteDecoratorMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return SpriteDecoratorMapper.toDomain(updatedEntity);
  }

  async remove(id: SpriteDecorator['id']): Promise<void> {
    await this.spriteDecoratorRepository.delete(id);
  }
}
