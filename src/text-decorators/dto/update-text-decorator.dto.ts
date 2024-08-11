// Don't forget to use the class-validator decorators in the DTO properties.
// import { Allow } from 'class-validator';

import { PartialType } from '@nestjs/swagger';
import { CreateTextDecoratorDto } from './create-text-decorator.dto';

export class UpdateTextDecoratorDto extends PartialType(
  CreateTextDecoratorDto,
) {}
