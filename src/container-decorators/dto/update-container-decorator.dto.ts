// Don't forget to use the class-validator decorators in the DTO properties.
// import { Allow } from 'class-validator';

import { PartialType } from '@nestjs/swagger';
import { CreateContainerDecoratorDto } from './create-container-decorator.dto';

export class UpdateContainerDecoratorDto extends PartialType(
  CreateContainerDecoratorDto,
) {}
