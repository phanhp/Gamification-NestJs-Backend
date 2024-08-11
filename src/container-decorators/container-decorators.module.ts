import { Module } from '@nestjs/common';
import { ContainerDecoratorsService } from './container-decorators.service';
import { ContainerDecoratorsController } from './container-decorators.controller';
import { RelationalContainerDecoratorPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [RelationalContainerDecoratorPersistenceModule],
  controllers: [ContainerDecoratorsController],
  providers: [ContainerDecoratorsService],
  exports: [
    ContainerDecoratorsService,
    RelationalContainerDecoratorPersistenceModule,
  ],
})
export class ContainerDecoratorsModule {}
