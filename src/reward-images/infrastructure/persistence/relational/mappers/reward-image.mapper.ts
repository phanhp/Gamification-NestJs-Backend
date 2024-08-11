import { RewardImage } from '../../../../domain/reward-image';
import { RewardImageEntity } from '../entities/reward-image.entity';

export class RewardImageMapper {
  static toDomain(raw: RewardImageEntity): RewardImage {
    const domainEntity = new RewardImage();
    domainEntity.type = raw.type;
    domainEntity.src = raw.src;
    domainEntity.relSizeY = raw.relSizeY;
    domainEntity.relSizeX = raw.relSizeX;
    domainEntity.relPosY = raw.relPosY;
    domainEntity.relPosX = raw.relPosX;
    domainEntity.relAncY = raw.relAncY;
    domainEntity.relAncX = raw.relAncX;
    domainEntity.rateSizeY = raw.rateSizeY;
    domainEntity.rateSizeX = raw.rateSizeX;
    domainEntity.cond = raw.cond;
    domainEntity.alpha = raw.alpha;
    domainEntity.adjRotAng = raw.adjRotAng;
    domainEntity.adjPosAng = raw.adjPosAng;
    domainEntity.absSizeY = raw.absSizeY;
    domainEntity.absSizeX = raw.absSizeX;
    domainEntity.absPosY = raw.absPosY;
    domainEntity.absPosX = raw.absPosX;
    domainEntity.absAncY = raw.absAncY;
    domainEntity.absAncX = raw.absAncX;
    domainEntity.name = raw.name;
    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: RewardImage): RewardImageEntity {
    const persistenceEntity = new RewardImageEntity();
    persistenceEntity.type = domainEntity.type;
    persistenceEntity.src = domainEntity.src;
    persistenceEntity.relSizeY = domainEntity.relSizeY;
    persistenceEntity.relSizeX = domainEntity.relSizeX;
    persistenceEntity.relPosY = domainEntity.relPosY;
    persistenceEntity.relPosX = domainEntity.relPosX;
    persistenceEntity.relAncY = domainEntity.relAncY;
    persistenceEntity.relAncX = domainEntity.relAncX;
    persistenceEntity.rateSizeY = domainEntity.rateSizeY;
    persistenceEntity.rateSizeX = domainEntity.rateSizeX;
    persistenceEntity.cond = domainEntity.cond;
    persistenceEntity.alpha = domainEntity.alpha;
    persistenceEntity.adjRotAng = domainEntity.adjRotAng;
    persistenceEntity.adjPosAng = domainEntity.adjPosAng;
    persistenceEntity.absSizeY = domainEntity.absSizeY;
    persistenceEntity.absSizeX = domainEntity.absSizeX;
    persistenceEntity.absPosY = domainEntity.absPosY;
    persistenceEntity.absPosX = domainEntity.absPosX;
    persistenceEntity.absAncY = domainEntity.absAncY;
    persistenceEntity.absAncX = domainEntity.absAncX;
    persistenceEntity.name = domainEntity.name;
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
