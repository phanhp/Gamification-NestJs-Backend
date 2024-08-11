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
import { ColorDecoratorsService } from './color-decorators.service';
import { CreateColorDecoratorDto } from './dto/create-color-decorator.dto';
import { UpdateColorDecoratorDto } from './dto/update-color-decorator.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { ColorDecorator } from './domain/color-decorator';
import { AuthGuard } from '@nestjs/passport';
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from '../utils/dto/infinity-pagination-response.dto';
import { infinityPagination } from '../utils/infinity-pagination';
import { FindAllColorDecoratorsDto } from './dto/find-all-color-decorators.dto';

@ApiTags('Colordecorators')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller({
  path: 'color-decorators',
  version: '1',
})
export class ColorDecoratorsController {
  constructor(
    private readonly colorDecoratorsService: ColorDecoratorsService,
  ) {}

  @Post()
  @ApiCreatedResponse({
    type: ColorDecorator,
  })
  create(@Body() createColorDecoratorDto: CreateColorDecoratorDto) {
    return this.colorDecoratorsService.create(createColorDecoratorDto);
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(ColorDecorator),
  })
  async findAll(
    @Query() query: FindAllColorDecoratorsDto,
  ): Promise<InfinityPaginationResponseDto<ColorDecorator>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.colorDecoratorsService.findAllWithPagination({
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
    type: ColorDecorator,
  })
  findOne(@Param('id') id: string) {
    return this.colorDecoratorsService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: ColorDecorator,
  })
  update(
    @Param('id') id: string,
    @Body() updateColorDecoratorDto: UpdateColorDecoratorDto,
  ) {
    return this.colorDecoratorsService.update(id, updateColorDecoratorDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  remove(@Param('id') id: string) {
    return this.colorDecoratorsService.remove(id);
  }
}
