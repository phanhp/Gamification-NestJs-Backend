import { ButtonDecorator } from '../../../../domain/button-decorator';
import { ButtonDecoratorEntity } from '../entities/button-decorator.entity';

export class ButtonDecoratorMapper {
  static toDomain(raw: ButtonDecoratorEntity): ButtonDecorator {
    const domainEntity = new ButtonDecorator();
    domainEntity.type = raw.type;
    domainEntity.roundCorner = raw.roundCorner;
    domainEntity.relSizeY = raw.relSizeY;
    domainEntity.relSizeX = raw.relSizeX;
    domainEntity.relPosY = raw.relPosY;
    domainEntity.relPosX = raw.relPosX;
    domainEntity.relPivY = raw.relPivY;
    domainEntity.relPivX = raw.relPivX;
    domainEntity.rateSizeY = raw.rateSizeY;
    domainEntity.rateSizeX = raw.rateSizeX;
    domainEntity.lineWidth = raw.lineWidth;
    domainEntity.lineColor = raw.lineColor;
    domainEntity.cond = raw.cond;
    domainEntity.color = raw.color;
    domainEntity.alpha = raw.alpha;
    domainEntity.adjRotAng = raw.adjRotAng;
    domainEntity.adjPosAng = raw.adjPosAng;
    domainEntity.absSizeY = raw.absSizeY;
    domainEntity.absSizeX = raw.absSizeX;
    domainEntity.absPosY = raw.absPosY;
    domainEntity.absPosX = raw.absPosX;
    domainEntity.absPivY = raw.absPivY;
    domainEntity.absPivX = raw.absPivX;
    domainEntity.name = raw.name;
    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: ButtonDecorator): ButtonDecoratorEntity {
    const persistenceEntity = new ButtonDecoratorEntity();
    persistenceEntity.type = domainEntity.type;
    persistenceEntity.roundCorner = domainEntity.roundCorner;
    persistenceEntity.relSizeY = domainEntity.relSizeY;
    persistenceEntity.relSizeX = domainEntity.relSizeX;
    persistenceEntity.relPosY = domainEntity.relPosY;
    persistenceEntity.relPosX = domainEntity.relPosX;
    persistenceEntity.relPivY = domainEntity.relPivY;
    persistenceEntity.relPivX = domainEntity.relPivX;
    persistenceEntity.rateSizeY = domainEntity.rateSizeY;
    persistenceEntity.rateSizeX = domainEntity.rateSizeX;
    persistenceEntity.lineWidth = domainEntity.lineWidth;
    persistenceEntity.lineColor = domainEntity.lineColor;
    persistenceEntity.cond = domainEntity.cond;
    persistenceEntity.color = domainEntity.color;
    persistenceEntity.alpha = domainEntity.alpha;
    persistenceEntity.adjRotAng = domainEntity.adjRotAng;
    persistenceEntity.adjPosAng = domainEntity.adjPosAng;
    persistenceEntity.absSizeY = domainEntity.absSizeY;
    persistenceEntity.absSizeX = domainEntity.absSizeX;
    persistenceEntity.absPosY = domainEntity.absPosY;
    persistenceEntity.absPosX = domainEntity.absPosX;
    persistenceEntity.absPivY = domainEntity.absPivY;
    persistenceEntity.absPivX = domainEntity.absPivX;
    persistenceEntity.name = domainEntity.name;
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
