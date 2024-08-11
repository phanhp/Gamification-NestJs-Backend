import { Module } from '@nestjs/common';
import { CampaignRepository } from '../campaign.repository';
import { CampaignRelationalRepository } from './repositories/campaign.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampaignEntity } from './entities/campaign.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CampaignEntity])],
  providers: [
    {
      provide: CampaignRepository,
      useClass: CampaignRelationalRepository,
    },
  ],
  exports: [CampaignRepository],
})
export class RelationalCampaignPersistenceModule {}
