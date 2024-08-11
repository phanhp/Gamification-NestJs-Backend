// Don't forget to use the class-validator decorators in the DTO properties.
// import { Allow } from 'class-validator';

import { PartialType } from '@nestjs/swagger';
import { CreateSpriteDecoratorDto } from './create-sprite-decorator.dto';

export class UpdateSpriteDecoratorDto extends PartialType(
  CreateSpriteDecoratorDto,
) {}
