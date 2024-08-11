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
import { RewardsService } from './rewards.service';
import { CreateRewardDto } from './dto/create-reward.dto';
import { UpdateRewardDto } from './dto/update-reward.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { Reward } from './domain/reward';
import { AuthGuard } from '@nestjs/passport';
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from '../utils/dto/infinity-pagination-response.dto';
import { infinityPagination } from '../utils/infinity-pagination';
import { FindAllRewardsDto } from './dto/find-all-rewards.dto';

@ApiTags('Rewards')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller({
  path: 'rewards',
  version: '1',
})
export class RewardsController {
  constructor(private readonly rewardsService: RewardsService) {}

  @Post()
  @ApiCreatedResponse({
    type: Reward,
  })
  create(@Body() createRewardDto: CreateRewardDto) {
    return this.rewardsService.create(createRewardDto);
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(Reward),
  })
  async findAll(
    @Query() query: FindAllRewardsDto,
  ): Promise<InfinityPaginationResponseDto<Reward>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.rewardsService.findAllWithPagination({
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
    type: Reward,
  })
  findOne(@Param('id') id: string) {
    return this.rewardsService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: Reward,
  })
  update(@Param('id') id: string, @Body() updateRewardDto: UpdateRewardDto) {
    return this.rewardsService.update(id, updateRewardDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  remove(@Param('id') id: string) {
    return this.rewardsService.remove(id);
  }
}
