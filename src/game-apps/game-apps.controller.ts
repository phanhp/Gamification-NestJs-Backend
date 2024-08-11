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
import { GameAppsService } from './game-apps.service';
import { CreateGameAppDto } from './dto/create-game-app.dto';
import { UpdateGameAppDto } from './dto/update-game-app.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { GameApp } from './domain/game-app';
import { AuthGuard } from '@nestjs/passport';
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from '../utils/dto/infinity-pagination-response.dto';
import { infinityPagination } from '../utils/infinity-pagination';
import { FindAllGameAppsDto } from './dto/find-all-game-apps.dto';

@ApiTags('Gameapps')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller({
  path: 'game-apps',
  version: '1',
})
export class GameAppsController {
  constructor(private readonly gameAppsService: GameAppsService) {}

  @Post()
  @ApiCreatedResponse({
    type: GameApp,
  })
  create(@Body() createGameAppDto: CreateGameAppDto) {
    return this.gameAppsService.create(createGameAppDto);
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(GameApp),
  })
  async findAll(
    @Query() query: FindAllGameAppsDto,
  ): Promise<InfinityPaginationResponseDto<GameApp>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.gameAppsService.findAllWithPagination({
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
    type: GameApp,
  })
  findOne(@Param('id') id: string) {
    return this.gameAppsService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: GameApp,
  })
  update(@Param('id') id: string, @Body() updateGameAppDto: UpdateGameAppDto) {
    return this.gameAppsService.update(id, updateGameAppDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  remove(@Param('id') id: string) {
    return this.gameAppsService.remove(id);
  }
}
