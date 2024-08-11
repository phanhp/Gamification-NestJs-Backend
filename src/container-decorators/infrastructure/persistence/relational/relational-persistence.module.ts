import { Module } from '@nestjs/common';
import { ContainerDecoratorRepository } from '../container-decorator.repository';
import { ContainerDecoratorRelationalRepository } from './repositories/container-decorator.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContainerDecoratorEntity } from './entities/container-decorator.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContainerDecoratorEntity])],
  providers: [
    {
      provide: ContainerDecoratorRepository,
      useClass: ContainerDecoratorRelationalRepository,
    },
  ],
  exports: [ContainerDecoratorRepository],
})
export class RelationalContainerDecoratorPersistenceModule {}
