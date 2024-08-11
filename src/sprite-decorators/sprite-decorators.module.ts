import { Module } from '@nestjs/common';
import { SpriteDecoratorsService } from './sprite-decorators.service';
import { SpriteDecoratorsController } from './sprite-decorators.controller';
import { RelationalSpriteDecoratorPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [RelationalSpriteDecoratorPersistenceModule],
  controllers: [SpriteDecoratorsController],
  providers: [SpriteDecoratorsService],
  exports: [
    SpriteDecoratorsService,
    RelationalSpriteDecoratorPersistenceModule,
  ],
})
export class SpriteDecoratorsModule {}
