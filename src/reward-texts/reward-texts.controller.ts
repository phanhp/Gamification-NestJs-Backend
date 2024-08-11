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
import { RewardTextsService } from './reward-texts.service';
import { CreateRewardTextDto } from './dto/create-reward-text.dto';
import { UpdateRewardTextDto } from './dto/update-reward-text.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { RewardText } from './domain/reward-text';
import { AuthGuard } from '@nestjs/passport';
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from '../utils/dto/infinity-pagination-response.dto';
import { infinityPagination } from '../utils/infinity-pagination';
import { FindAllRewardTextsDto } from './dto/find-all-reward-texts.dto';

@ApiTags('Rewardtexts')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller({
  path: 'reward-texts',
  version: '1',
})
export class RewardTextsController {
  constructor(private readonly rewardTextsService: RewardTextsService) {}

  @Post()
  @ApiCreatedResponse({
    type: RewardText,
  })
  create(@Body() createRewardTextDto: CreateRewardTextDto) {
    return this.rewardTextsService.create(createRewardTextDto);
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(RewardText),
  })
  async findAll(
    @Query() query: FindAllRewardTextsDto,
  ): Promise<InfinityPaginationResponseDto<RewardText>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.rewardTextsService.findAllWithPagination({
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
    type: RewardText,
  })
  findOne(@Param('id') id: string) {
    return this.rewardTextsService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: RewardText,
  })
  update(
    @Param('id') id: string,
    @Body() updateRewardTextDto: UpdateRewardTextDto,
  ) {
    return this.rewardTextsService.update(id, updateRewardTextDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  remove(@Param('id') id: string) {
    return this.rewardTextsService.remove(id);
  }
}
