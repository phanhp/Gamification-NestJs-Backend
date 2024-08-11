import { Reward } from '../../../../domain/reward';
import { RewardEntity } from '../entities/reward.entity';

export class RewardMapper {
  static toDomain(raw: RewardEntity): Reward {
    const domainEntity = new Reward();
    domainEntity.type = raw.type;
    domainEntity.limitType = raw.limitType;
    domainEntity.ease = raw.ease;
    domainEntity.amount = raw.amount;
    domainEntity.name = raw.name;
    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Reward): RewardEntity {
    const persistenceEntity = new RewardEntity();
    persistenceEntity.type = domainEntity.type;
    persistenceEntity.limitType = domainEntity.limitType;
    persistenceEntity.ease = domainEntity.ease;
    persistenceEntity.amount = domainEntity.amount;
    persistenceEntity.name = domainEntity.name;
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
