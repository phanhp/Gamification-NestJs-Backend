// Don't forget to use the class-validator decorators in the DTO properties.
// import { Allow } from 'class-validator';

import { PartialType } from '@nestjs/swagger';
import { CreateCampaignDto } from './create-campaign.dto';

export class UpdateCampaignDto extends PartialType(CreateCampaignDto) {}
