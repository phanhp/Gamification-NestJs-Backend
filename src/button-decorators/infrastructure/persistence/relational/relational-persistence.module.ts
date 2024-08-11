import { Module } from '@nestjs/common';
import { ButtonDecoratorRepository } from '../button-decorator.repository';
import { ButtonDecoratorRelationalRepository } from './repositories/button-decorator.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ButtonDecoratorEntity } from './entities/button-decorator.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ButtonDecoratorEntity])],
  providers: [
    {
      provide: ButtonDecoratorRepository,
      useClass: ButtonDecoratorRelationalRepository,
    },
  ],
  exports: [ButtonDecoratorRepository],
})
export class RelationalButtonDecoratorPersistenceModule {}
