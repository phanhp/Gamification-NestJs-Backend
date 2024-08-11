import { Module } from '@nestjs/common';
import { TextDecoratorRepository } from '../text-decorator.repository';
import { TextDecoratorRelationalRepository } from './repositories/text-decorator.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TextDecoratorEntity } from './entities/text-decorator.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TextDecoratorEntity])],
  providers: [
    {
      provide: TextDecoratorRepository,
      useClass: TextDecoratorRelationalRepository,
    },
  ],
  exports: [TextDecoratorRepository],
})
export class RelationalTextDecoratorPersistenceModule {}
