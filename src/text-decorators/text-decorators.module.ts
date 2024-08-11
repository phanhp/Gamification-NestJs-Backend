import { Module } from '@nestjs/common';
import { TextDecoratorsService } from './text-decorators.service';
import { TextDecoratorsController } from './text-decorators.controller';
import { RelationalTextDecoratorPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [RelationalTextDecoratorPersistenceModule],
  controllers: [TextDecoratorsController],
  providers: [TextDecoratorsService],
  exports: [TextDecoratorsService, RelationalTextDecoratorPersistenceModule],
})
export class TextDecoratorsModule {}
