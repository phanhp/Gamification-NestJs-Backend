import { Module } from '@nestjs/common';
import { RewardTextsService } from './reward-texts.service';
import { RewardTextsController } from './reward-texts.controller';
import { RelationalRewardTextPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [RelationalRewardTextPersistenceModule],
  controllers: [RewardTextsController],
  providers: [RewardTextsService],
  exports: [RewardTextsService, RelationalRewardTextPersistenceModule],
})
export class RewardTextsModule {}
