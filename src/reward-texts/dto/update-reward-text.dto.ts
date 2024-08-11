// Don't forget to use the class-validator decorators in the DTO properties.
// import { Allow } from 'class-validator';

import { PartialType } from '@nestjs/swagger';
import { CreateRewardTextDto } from './create-reward-text.dto';

export class UpdateRewardTextDto extends PartialType(CreateRewardTextDto) {}
