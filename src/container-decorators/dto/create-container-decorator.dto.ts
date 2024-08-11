import {
  // decorators here

  IsString,
  IsNumber,
} from 'class-validator';

import {
  // decorators here
  ApiProperty,
} from '@nestjs/swagger';

export class CreateContainerDecoratorDto {
  @ApiProperty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsNumber()
  relPosY: number;

  @ApiProperty()
  @IsNumber()
  relPosX: number;

  @ApiProperty()
  @IsString()
  cond: string;

  @ApiProperty()
  @IsNumber()
  adjRotAng: number;

  @ApiProperty()
  @IsNumber()
  adjPosAng: number;

  @ApiProperty()
  @IsNumber()
  absPosY: number;

  @ApiProperty()
  @IsNumber()
  absPosX: number;

  @ApiProperty()
  @IsString()
  name: string;

  // Don't forget to use the class-validator decorators in the DTO properties.
}
