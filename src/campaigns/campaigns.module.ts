import { Module } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { CampaignsController } from './campaigns.controller';
import { RelationalCampaignPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [RelationalCampaignPersistenceModule],
  controllers: [CampaignsController],
  providers: [CampaignsService],
  exports: [CampaignsService, RelationalCampaignPersistenceModule],
})
export class CampaignsModule {}
