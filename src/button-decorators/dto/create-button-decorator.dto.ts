import {
  // decorators here

  IsString,
  IsNumber,
} from 'class-validator';

import {
  // decorators here
  ApiProperty,
} from '@nestjs/swagger';

export class CreateButtonDecoratorDto {
  @ApiProperty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsNumber()
  roundCorner: number;

  @ApiProperty()
  @IsNumber()
  relSizeY: number;

  @ApiProperty()
  @IsNumber()
  relSizeX: number;

  @ApiProperty()
  @IsNumber()
  relPosY: number;

  @ApiProperty()
  @IsNumber()
  relPosX: number;

  @ApiProperty()
  @IsNumber()
  relPivY: number;

  @ApiProperty()
  @IsNumber()
  relPivX: number;

  @ApiProperty()
  @IsNumber()
  rateSizeY: number;

  @ApiProperty()
  @IsNumber()
  rateSizeX: number;

  @ApiProperty()
  @IsNumber()
  lineWidth: number;

  @ApiProperty()
  @IsString()
  lineColor: string;

  @ApiProperty()
  @IsString()
  cond: string;

  @ApiProperty()
  @IsString()
  color: string;

  @ApiProperty()
  @IsNumber()
  alpha: number;

  @ApiProperty()
  @IsNumber()
  adjRotAng: number;

  @ApiProperty()
  @IsNumber()
  adjPosAng: number;

  @ApiProperty()
  @IsNumber()
  absSizeY: number;

  @ApiProperty()
  @IsNumber()
  absSizeX: number;

  @ApiProperty()
  @IsNumber()
  absPosY: number;

  @ApiProperty()
  @IsNumber()
  absPosX: number;

  @ApiProperty()
  @IsNumber()
  absPivY: number;

  @ApiProperty()
  @IsNumber()
  absPivX: number;

  @ApiProperty()
  @IsString()
  name: string;

  // Don't forget to use the class-validator decorators in the DTO properties.
}
