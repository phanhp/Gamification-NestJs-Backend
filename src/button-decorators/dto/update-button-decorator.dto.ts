// Don't forget to use the class-validator decorators in the DTO properties.
// import { Allow } from 'class-validator';

import { PartialType } from '@nestjs/swagger';
import { CreateButtonDecoratorDto } from './create-button-decorator.dto';

export class UpdateButtonDecoratorDto extends PartialType(
  CreateButtonDecoratorDto,
) {}
