import {
  // decorators here

  IsString,
  IsNumber,
} from 'class-validator';

import {
  // decorators here
  ApiProperty,
} from '@nestjs/swagger';

export class CreateColorDecoratorDto {
  @ApiProperty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsString()
  data: string;

  @ApiProperty()
  @IsString()
  cond: string;

  @ApiProperty()
  @IsNumber()
  alpha: number;

  @ApiProperty()
  @IsString()
  name: string;

  // Don't forget to use the class-validator decorators in the DTO properties.
}
