import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { RewardImagesService } from './reward-images.service';
import { CreateRewardImageDto } from './dto/create-reward-image.dto';
import { UpdateRewardImageDto } from './dto/update-reward-image.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { RewardImage } from './domain/reward-image';
import { AuthGuard } from '@nestjs/passport';
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from '../utils/dto/infinity-pagination-response.dto';
import { infinityPagination } from '../utils/infinity-pagination';
import { FindAllRewardImagesDto } from './dto/find-all-reward-images.dto';

@ApiTags('Rewardimages')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller({
  path: 'reward-images',
  version: '1',
})
export class RewardImagesController {
  constructor(private readonly rewardImagesService: RewardImagesService) {}

  @Post()
  @ApiCreatedResponse({
    type: RewardImage,
  })
  create(@Body() createRewardImageDto: CreateRewardImageDto) {
    return this.rewardImagesService.create(createRewardImageDto);
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(RewardImage),
  })
  async findAll(
    @Query() query: FindAllRewardImagesDto,
  ): Promise<InfinityPaginationResponseDto<RewardImage>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.rewardImagesService.findAllWithPagination({
        paginationOptions: {
          page,
          limit,
        },
      }),
      { page, limit },
    );
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: RewardImage,
  })
  findOne(@Param('id') id: string) {
    return this.rewardImagesService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: RewardImage,
  })
  update(
    @Param('id') id: string,
    @Body() updateRewardImageDto: UpdateRewardImageDto,
  ) {
    return this.rewardImagesService.update(id, updateRewardImageDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  remove(@Param('id') id: string) {
    return this.rewardImagesService.remove(id);
  }
}
