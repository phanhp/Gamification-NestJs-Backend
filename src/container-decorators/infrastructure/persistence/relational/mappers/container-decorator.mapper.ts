import { ContainerDecorator } from '../../../../domain/container-decorator';
import { ContainerDecoratorEntity } from '../entities/container-decorator.entity';

export class ContainerDecoratorMapper {
  static toDomain(raw: ContainerDecoratorEntity): ContainerDecorator {
    const domainEntity = new ContainerDecorator();
    domainEntity.type = raw.type;
    domainEntity.relPosY = raw.relPosY;
    domainEntity.relPosX = raw.relPosX;
    domainEntity.cond = raw.cond;
    domainEntity.adjRotAng = raw.adjRotAng;
    domainEntity.adjPosAng = raw.adjPosAng;
    domainEntity.absPosY = raw.absPosY;
    domainEntity.absPosX = raw.absPosX;
    domainEntity.name = raw.name;
    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(
    domainEntity: ContainerDecorator,
  ): ContainerDecoratorEntity {
    const persistenceEntity = new ContainerDecoratorEntity();
    persistenceEntity.type = domainEntity.type;
    persistenceEntity.relPosY = domainEntity.relPosY;
    persistenceEntity.relPosX = domainEntity.relPosX;
    persistenceEntity.cond = domainEntity.cond;
    persistenceEntity.adjRotAng = domainEntity.adjRotAng;
    persistenceEntity.adjPosAng = domainEntity.adjPosAng;
    persistenceEntity.absPosY = domainEntity.absPosY;
    persistenceEntity.absPosX = domainEntity.absPosX;
    persistenceEntity.name = domainEntity.name;
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
