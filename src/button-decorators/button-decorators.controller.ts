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
import { ButtonDecoratorsService } from './button-decorators.service';
import { CreateButtonDecoratorDto } from './dto/create-button-decorator.dto';
import { UpdateButtonDecoratorDto } from './dto/update-button-decorator.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { ButtonDecorator } from './domain/button-decorator';
import { AuthGuard } from '@nestjs/passport';
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from '../utils/dto/infinity-pagination-response.dto';
import { infinityPagination } from '../utils/infinity-pagination';
import { FindAllButtonDecoratorsDto } from './dto/find-all-button-decorators.dto';

@ApiTags('Buttondecorators')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller({
  path: 'button-decorators',
  version: '1',
})
export class ButtonDecoratorsController {
  constructor(
    private readonly buttonDecoratorsService: ButtonDecoratorsService,
  ) {}

  @Post()
  @ApiCreatedResponse({
    type: ButtonDecorator,
  })
  create(@Body() createButtonDecoratorDto: CreateButtonDecoratorDto) {
    return this.buttonDecoratorsService.create(createButtonDecoratorDto);
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(ButtonDecorator),
  })
  async findAll(
    @Query() query: FindAllButtonDecoratorsDto,
  ): Promise<InfinityPaginationResponseDto<ButtonDecorator>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.buttonDecoratorsService.findAllWithPagination({
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
    type: ButtonDecorator,
  })
  findOne(@Param('id') id: string) {
    return this.buttonDecoratorsService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: ButtonDecorator,
  })
  update(
    @Param('id') id: string,
    @Body() updateButtonDecoratorDto: UpdateButtonDecoratorDto,
  ) {
    return this.buttonDecoratorsService.update(id, updateButtonDecoratorDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  remove(@Param('id') id: string) {
    return this.buttonDecoratorsService.remove(id);
  }
}
