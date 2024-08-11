import { Injectable } from '@nestjs/common';
import { CreateContainerDecoratorDto } from './dto/create-container-decorator.dto';
import { UpdateContainerDecoratorDto } from './dto/update-container-decorator.dto';
import { ContainerDecoratorRepository } from './infrastructure/persistence/container-decorator.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { ContainerDecorator } from './domain/container-decorator';

@Injectable()
export class ContainerDecoratorsService {
  constructor(
    private readonly containerDecoratorRepository: ContainerDecoratorRepository,
  ) {}

  create(createContainerDecoratorDto: CreateContainerDecoratorDto) {
    return this.containerDecoratorRepository.create(
      createContainerDecoratorDto,
    );
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.containerDecoratorRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: ContainerDecorator['id']) {
    return this.containerDecoratorRepository.findById(id);
  }

  update(
    id: ContainerDecorator['id'],
    updateContainerDecoratorDto: UpdateContainerDecoratorDto,
  ) {
    return this.containerDecoratorRepository.update(
      id,
      updateContainerDecoratorDto,
    );
  }

  remove(id: ContainerDecorator['id']) {
    return this.containerDecoratorRepository.remove(id);
  }
}
