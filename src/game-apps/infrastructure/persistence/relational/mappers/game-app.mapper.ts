import { GameApp } from '../../../../domain/game-app';
import { GameAppEntity } from '../entities/game-app.entity';

export class GameAppMapper {
  static toDomain(raw: GameAppEntity): GameApp {
    const domainEntity = new GameApp();
    domainEntity.type = raw.type;
    domainEntity.published = raw.published;
    domainEntity.name = raw.name;
    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: GameApp): GameAppEntity {
    const persistenceEntity = new GameAppEntity();
    persistenceEntity.type = domainEntity.type;
    persistenceEntity.published = domainEntity.published;
    persistenceEntity.name = domainEntity.name;
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
