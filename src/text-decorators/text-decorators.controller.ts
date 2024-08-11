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
import { TextDecoratorsService } from './text-decorators.service';
import { CreateTextDecoratorDto } from './dto/create-text-decorator.dto';
import { UpdateTextDecoratorDto } from './dto/update-text-decorator.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { TextDecorator } from './domain/text-decorator';
import { AuthGuard } from '@nestjs/passport';
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from '../utils/dto/infinity-pagination-response.dto';
import { infinityPagination } from '../utils/infinity-pagination';
import { FindAllTextDecoratorsDto } from './dto/find-all-text-decorators.dto';

@ApiTags('Textdecorators')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller({
  path: 'text-decorators',
  version: '1',
})
export class TextDecoratorsController {
  constructor(private readonly textDecoratorsService: TextDecoratorsService) {}

  @Post()
  @ApiCreatedResponse({
    type: TextDecorator,
  })
  create(@Body() createTextDecoratorDto: CreateTextDecoratorDto) {
    return this.textDecoratorsService.create(createTextDecoratorDto);
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(TextDecorator),
  })
  async findAll(
    @Query() query: FindAllTextDecoratorsDto,
  ): Promise<InfinityPaginationResponseDto<TextDecorator>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.textDecoratorsService.findAllWithPagination({
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
    type: TextDecorator,
  })
  findOne(@Param('id') id: string) {
    return this.textDecoratorsService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: TextDecorator,
  })
  update(
    @Param('id') id: string,
    @Body() updateTextDecoratorDto: UpdateTextDecoratorDto,
  ) {
    return this.textDecoratorsService.update(id, updateTextDecoratorDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  remove(@Param('id') id: string) {
    return this.textDecoratorsService.remove(id);
  }
}
