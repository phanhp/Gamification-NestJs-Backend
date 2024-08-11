import { Module } from '@nestjs/common';
import { ColorDecoratorsService } from './color-decorators.service';
import { ColorDecoratorsController } from './color-decorators.controller';
import { RelationalColorDecoratorPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [RelationalColorDecoratorPersistenceModule],
  controllers: [ColorDecoratorsController],
  providers: [ColorDecoratorsService],
  exports: [ColorDecoratorsService, RelationalColorDecoratorPersistenceModule],
})
export class ColorDecoratorsModule {}
