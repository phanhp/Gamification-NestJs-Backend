import { Module } from '@nestjs/common';
import { ButtonDecoratorsService } from './button-decorators.service';
import { ButtonDecoratorsController } from './button-decorators.controller';
import { RelationalButtonDecoratorPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [RelationalButtonDecoratorPersistenceModule],
  controllers: [ButtonDecoratorsController],
  providers: [ButtonDecoratorsService],
  exports: [
    ButtonDecoratorsService,
    RelationalButtonDecoratorPersistenceModule,
  ],
})
export class ButtonDecoratorsModule {}
