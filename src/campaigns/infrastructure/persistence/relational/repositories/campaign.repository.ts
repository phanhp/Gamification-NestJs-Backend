import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CampaignEntity } from '../entities/campaign.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { Campaign } from '../../../../domain/campaign';
import { CampaignRepository } from '../../campaign.repository';
import { CampaignMapper } from '../mappers/campaign.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';

@Injectable()
export class CampaignRelationalRepository implements CampaignRepository {
  constructor(
    @InjectRepository(CampaignEntity)
    private readonly campaignRepository: Repository<CampaignEntity>,
  ) {}

  async create(data: Campaign): Promise<Campaign> {
    const persistenceModel = CampaignMapper.toPersistence(data);
    const newEntity = await this.campaignRepository.save(
      this.campaignRepository.create(persistenceModel),
    );
    return CampaignMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Campaign[]> {
    const entities = await this.campaignRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((user) => CampaignMapper.toDomain(user));
  }

  async findById(id: Campaign['id']): Promise<NullableType<Campaign>> {
    const entity = await this.campaignRepository.findOne({
      where: { id },
    });

    return entity ? CampaignMapper.toDomain(entity) : null;
  }

  async update(
    id: Campaign['id'],
    payload: Partial<Campaign>,
  ): Promise<Campaign> {
    const entity = await this.campaignRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Record not found');
    }

    const updatedEntity = await this.campaignRepository.save(
      this.campaignRepository.create(
        CampaignMapper.toPersistence({
          ...CampaignMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return CampaignMapper.toDomain(updatedEntity);
  }

  async remove(id: Campaign['id']): Promise<void> {
    await this.campaignRepository.delete(id);
  }
}
