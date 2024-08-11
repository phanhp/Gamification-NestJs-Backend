import { ColorDecorator } from '../../../../domain/color-decorator';
import { ColorDecoratorEntity } from '../entities/color-decorator.entity';

export class ColorDecoratorMapper {
  static toDomain(raw: ColorDecoratorEntity): ColorDecorator {
    const domainEntity = new ColorDecorator();
    domainEntity.type = raw.type;
    domainEntity.data = raw.data;
    domainEntity.cond = raw.cond;
    domainEntity.alpha = raw.alpha;
    domainEntity.name = raw.name;
    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: ColorDecorator): ColorDecoratorEntity {
    const persistenceEntity = new ColorDecoratorEntity();
    persistenceEntity.type = domainEntity.type;
    persistenceEntity.data = domainEntity.data;
    persistenceEntity.cond = domainEntity.cond;
    persistenceEntity.alpha = domainEntity.alpha;
    persistenceEntity.name = domainEntity.name;
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
