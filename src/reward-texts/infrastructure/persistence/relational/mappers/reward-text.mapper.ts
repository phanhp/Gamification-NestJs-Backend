import { RewardText } from '../../../../domain/reward-text';
import { RewardTextEntity } from '../entities/reward-text.entity';

export class RewardTextMapper {
  static toDomain(raw: RewardTextEntity): RewardText {
    const domainEntity = new RewardText();
    domainEntity.type = raw.type;
    domainEntity.relPosY = raw.relPosY;
    domainEntity.relPosX = raw.relPosX;
    domainEntity.relAncY = raw.relAncY;
    domainEntity.relAncX = raw.relAncX;
    domainEntity.fontSize = raw.fontSize;
    domainEntity.fontFamily = raw.fontFamily;
    domainEntity.content = raw.content;
    domainEntity.cond = raw.cond;
    domainEntity.color = raw.color;
    domainEntity.alpha = raw.alpha;
    domainEntity.adjRotAng = raw.adjRotAng;
    domainEntity.adjPosAng = raw.adjPosAng;
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

  static toPersistence(domainEntity: RewardText): RewardTextEntity {
    const persistenceEntity = new RewardTextEntity();
    persistenceEntity.type = domainEntity.type;
    persistenceEntity.relPosY = domainEntity.relPosY;
    persistenceEntity.relPosX = domainEntity.relPosX;
    persistenceEntity.relAncY = domainEntity.relAncY;
    persistenceEntity.relAncX = domainEntity.relAncX;
    persistenceEntity.fontSize = domainEntity.fontSize;
    persistenceEntity.fontFamily = domainEntity.fontFamily;
    persistenceEntity.content = domainEntity.content;
    persistenceEntity.cond = domainEntity.cond;
    persistenceEntity.color = domainEntity.color;
    persistenceEntity.alpha = domainEntity.alpha;
    persistenceEntity.adjRotAng = domainEntity.adjRotAng;
    persistenceEntity.adjPosAng = domainEntity.adjPosAng;
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
