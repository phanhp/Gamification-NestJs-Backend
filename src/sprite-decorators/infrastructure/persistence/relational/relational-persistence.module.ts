import { Module } from '@nestjs/common';
import { SpriteDecoratorRepository } from '../sprite-decorator.repository';
import { SpriteDecoratorRelationalRepository } from './repositories/sprite-decorator.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpriteDecoratorEntity } from './entities/sprite-decorator.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SpriteDecoratorEntity])],
  providers: [
    {
      provide: SpriteDecoratorRepository,
      useClass: SpriteDecoratorRelationalRepository,
    },
  ],
  exports: [SpriteDecoratorRepository],
})
export class RelationalSpriteDecoratorPersistenceModule {}
