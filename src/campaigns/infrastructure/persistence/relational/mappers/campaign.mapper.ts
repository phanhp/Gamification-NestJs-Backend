import { Campaign } from '../../../../domain/campaign';
import { CampaignEntity } from '../entities/campaign.entity';

export class CampaignMapper {
  static toDomain(raw: CampaignEntity): Campaign {
    const domainEntity = new Campaign();
    domainEntity.name = raw.name;
    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Campaign): CampaignEntity {
    const persistenceEntity = new CampaignEntity();
    persistenceEntity.name = domainEntity.name;
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
