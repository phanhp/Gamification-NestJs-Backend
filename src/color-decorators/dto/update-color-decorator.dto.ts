// Don't forget to use the class-validator decorators in the DTO properties.
// import { Allow } from 'class-validator';

import { PartialType } from '@nestjs/swagger';
import { CreateColorDecoratorDto } from './create-color-decorator.dto';

export class UpdateColorDecoratorDto extends PartialType(
  CreateColorDecoratorDto,
) {}
