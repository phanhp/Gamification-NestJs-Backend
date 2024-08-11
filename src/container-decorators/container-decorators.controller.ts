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
import { ContainerDecoratorsService } from './container-decorators.service';
import { CreateContainerDecoratorDto } from './dto/create-container-decorator.dto';
import { UpdateContainerDecoratorDto } from './dto/update-container-decorator.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { ContainerDecorator } from './domain/container-decorator';
import { AuthGuard } from '@nestjs/passport';
import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from '../utils/dto/infinity-pagination-response.dto';
import { infinityPagination } from '../utils/infinity-pagination';
import { FindAllContainerDecoratorsDto } from './dto/find-all-container-decorators.dto';

@ApiTags('Containerdecorators')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller({
  path: 'container-decorators',
  version: '1',
})
export class ContainerDecoratorsController {
  constructor(
    private readonly containerDecoratorsService: ContainerDecoratorsService,
  ) {}

  @Post()
  @ApiCreatedResponse({
    type: ContainerDecorator,
  })
  create(@Body() createContainerDecoratorDto: CreateContainerDecoratorDto) {
    return this.containerDecoratorsService.create(createContainerDecoratorDto);
  }

  @Get()
  @ApiOkResponse({
    type: InfinityPaginationResponse(ContainerDecorator),
  })
  async findAll(
    @Query() query: FindAllContainerDecoratorsDto,
  ): Promise<InfinityPaginationResponseDto<ContainerDecorator>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.containerDecoratorsService.findAllWithPagination({
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
    type: ContainerDecorator,
  })
  findOne(@Param('id') id: string) {
    return this.containerDecoratorsService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @ApiOkResponse({
    type: ContainerDecorator,
  })
  update(
    @Param('id') id: string,
    @Body() updateContainerDecoratorDto: UpdateContainerDecoratorDto,
  ) {
    return this.containerDecoratorsService.update(
      id,
      updateContainerDecoratorDto,
    );
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  remove(@Param('id') id: string) {
    return this.containerDecoratorsService.remove(id);
  }
}
