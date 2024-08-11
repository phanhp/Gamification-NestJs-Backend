import { Injectable } from '@nestjs/common';
import { CreateSpriteDecoratorDto } from './dto/create-sprite-decorator.dto';
import { UpdateSpriteDecoratorDto } from './dto/update-sprite-decorator.dto';
import { SpriteDecoratorRepository } from './infrastructure/persistence/sprite-decorator.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { SpriteDecorator } from './domain/sprite-decorator';

@Injectable()
export class SpriteDecoratorsService {
  constructor(
    private readonly spriteDecoratorRepository: SpriteDecoratorRepository,
  ) {}

  create(createSpriteDecoratorDto: CreateSpriteDecoratorDto) {
    return this.spriteDecoratorRepository.create(createSpriteDecoratorDto);
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.spriteDecoratorRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: SpriteDecorator['id']) {
    return this.spriteDecoratorRepository.findById(id);
  }

  update(
    id: SpriteDecorator['id'],
    updateSpriteDecoratorDto: UpdateSpriteDecoratorDto,
  ) {
    return this.spriteDecoratorRepository.update(id, updateSpriteDecoratorDto);
  }

  remove(id: SpriteDecorator['id']) {
    return this.spriteDecoratorRepository.remove(id);
  }
}
