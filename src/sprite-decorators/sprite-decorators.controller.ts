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
import { SpriteDecoratorsService } from './sprite-decorators.service';
import { CreateSpriteDecoratorDto } from './dto/create-sprite-decorator.dto';
import { UpdateSpriteDecoratorDto } from './dto/update-sprite-decorator.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { SpriteDecorator } from './domain/sprite-decorator';
import { AuthGuard } from '@nestjs/passport';
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from '../utils/dto/infinity-pagination-response.dto';
import { infinityPagination } from '../utils/infinity-pagination';
import { FindAllSpriteDecoratorsDto } from './dto/find-all-sprite-decorators.dto';

@ApiTags('Spritedecorators')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller({
  path: 'sprite-decorators',
  version: '1',
})
export class SpriteDecoratorsController {
  constructor(
    private readonly spriteDecoratorsService: SpriteDecoratorsService,
  ) {}

  @Post()
  @ApiCreatedResponse({
    type: SpriteDecorator,
  })
  create(@Body() createSpriteDecoratorDto: CreateSpriteDecoratorDto) {
    return this.spriteDecoratorsService.create(createSpriteDecoratorDto);
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(SpriteDecorator),
  })
  async findAll(
    @Query() query: FindAllSpriteDecoratorsDto,
  ): Promise<InfinityPaginationResponseDto<SpriteDecorator>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.spriteDecoratorsService.findAllWithPagination({
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
    type: SpriteDecorator,
  })
  findOne(@Param('id') id: string) {
    return this.spriteDecoratorsService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: SpriteDecorator,
  })
  update(
    @Param('id') id: string,
    @Body() updateSpriteDecoratorDto: UpdateSpriteDecoratorDto,
  ) {
    return this.spriteDecoratorsService.update(id, updateSpriteDecoratorDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  remove(@Param('id') id: string) {
    return this.spriteDecoratorsService.remove(id);
  }
}
