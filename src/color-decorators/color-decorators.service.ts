import { Injectable } from '@nestjs/common';
import { CreateColorDecoratorDto } from './dto/create-color-decorator.dto';
import { UpdateColorDecoratorDto } from './dto/update-color-decorator.dto';
import { ColorDecoratorRepository } from './infrastructure/persistence/color-decorator.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { ColorDecorator } from './domain/color-decorator';

@Injectable()
export class ColorDecoratorsService {
  constructor(
    private readonly colorDecoratorRepository: ColorDecoratorRepository,
  ) {}

  create(createColorDecoratorDto: CreateColorDecoratorDto) {
    return this.colorDecoratorRepository.create(createColorDecoratorDto);
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.colorDecoratorRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: ColorDecorator['id']) {
    return this.colorDecoratorRepository.findById(id);
  }

  update(
    id: ColorDecorator['id'],
    updateColorDecoratorDto: UpdateColorDecoratorDto,
  ) {
    return this.colorDecoratorRepository.update(id, updateColorDecoratorDto);
  }

  remove(id: ColorDecorator['id']) {
    return this.colorDecoratorRepository.remove(id);
  }
}
