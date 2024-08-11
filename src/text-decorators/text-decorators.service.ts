import { Injectable } from '@nestjs/common';
import { CreateTextDecoratorDto } from './dto/create-text-decorator.dto';
import { UpdateTextDecoratorDto } from './dto/update-text-decorator.dto';
import { TextDecoratorRepository } from './infrastructure/persistence/text-decorator.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { TextDecorator } from './domain/text-decorator';

@Injectable()
export class TextDecoratorsService {
  constructor(
    private readonly textDecoratorRepository: TextDecoratorRepository,
  ) {}

  create(createTextDecoratorDto: CreateTextDecoratorDto) {
    return this.textDecoratorRepository.create(createTextDecoratorDto);
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.textDecoratorRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: TextDecorator['id']) {
    return this.textDecoratorRepository.findById(id);
  }

  update(
    id: TextDecorator['id'],
    updateTextDecoratorDto: UpdateTextDecoratorDto,
  ) {
    return this.textDecoratorRepository.update(id, updateTextDecoratorDto);
  }

  remove(id: TextDecorator['id']) {
    return this.textDecoratorRepository.remove(id);
  }
}
