import { Module } from '@nestjs/common';
import { ColorDecoratorRepository } from '../color-decorator.repository';
import { ColorDecoratorRelationalRepository } from './repositories/color-decorator.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColorDecoratorEntity } from './entities/color-decorator.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ColorDecoratorEntity])],
  providers: [
    {
      provide: ColorDecoratorRepository,
      useClass: ColorDecoratorRelationalRepository,
    },
  ],
  exports: [ColorDecoratorRepository],
})
export class RelationalColorDecoratorPersistenceModule {}
