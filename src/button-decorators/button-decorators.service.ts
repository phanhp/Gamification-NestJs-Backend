import { Injectable } from '@nestjs/common';
import { CreateButtonDecoratorDto } from './dto/create-button-decorator.dto';
import { UpdateButtonDecoratorDto } from './dto/update-button-decorator.dto';
import { ButtonDecoratorRepository } from './infrastructure/persistence/button-decorator.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { ButtonDecorator } from './domain/button-decorator';

@Injectable()
export class ButtonDecoratorsService {
  constructor(
    private readonly buttonDecoratorRepository: ButtonDecoratorRepository,
  ) {}

  create(createButtonDecoratorDto: CreateButtonDecoratorDto) {
    return this.buttonDecoratorRepository.create(createButtonDecoratorDto);
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.buttonDecoratorRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: ButtonDecorator['id']) {
    return this.buttonDecoratorRepository.findById(id);
  }

  update(
    id: ButtonDecorator['id'],
    updateButtonDecoratorDto: UpdateButtonDecoratorDto,
  ) {
    return this.buttonDecoratorRepository.update(id, updateButtonDecoratorDto);
  }

  remove(id: ButtonDecorator['id']) {
    return this.buttonDecoratorRepository.remove(id);
  }
}
