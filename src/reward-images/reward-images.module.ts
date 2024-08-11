import { Module } from '@nestjs/common';
import { RewardImagesService } from './reward-images.service';
import { RewardImagesController } from './reward-images.controller';
import { RelationalRewardImagePersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [RelationalRewardImagePersistenceModule],
  controllers: [RewardImagesController],
  providers: [RewardImagesService],
  exports: [RewardImagesService, RelationalRewardImagePersistenceModule],
})
export class RewardImagesModule {}
