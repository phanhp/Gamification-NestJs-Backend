import { Injectable } from '@nestjs/common';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { CampaignRepository } from './infrastructure/persistence/campaign.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Campaign } from './domain/campaign';

@Injectable()
export class CampaignsService {
  constructor(private readonly campaignRepository: CampaignRepository) {}

  create(createCampaignDto: CreateCampaignDto) {
    return this.campaignRepository.create(createCampaignDto);
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.campaignRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: Campaign['id']) {
    return this.campaignRepository.findById(id);
  }

  update(id: Campaign['id'], updateCampaignDto: UpdateCampaignDto) {
    return this.campaignRepository.update(id, updateCampaignDto);
  }

  remove(id: Campaign['id']) {
    return this.campaignRepository.remove(id);
  }
}
