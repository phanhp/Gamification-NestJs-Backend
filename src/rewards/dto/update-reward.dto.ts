// Don't forget to use the class-validator decorators in the DTO properties.
// import { Allow } from 'class-validator';

import { PartialType } from '@nestjs/swagger';
import { CreateRewardDto } from './create-reward.dto';

export class UpdateRewardDto extends PartialType(CreateRewardDto) {}
