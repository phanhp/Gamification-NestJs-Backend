import {
  // decorators here

  IsString,
  IsNumber,
} from 'class-validator';

import {
  // decorators here
  ApiProperty,
} from '@nestjs/swagger';

export class CreateSpriteDecoratorDto {
  @ApiProperty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsString()
  src: string;

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
  relAncY: number;

  @ApiProperty()
  @IsNumber()
  relAncX: number;

  @ApiProperty()
  @IsNumber()
  rateSizeX: number;

  @ApiProperty()
  @IsNumber()
  rateSizeY: number;

  @ApiProperty()
  @IsString()
  cond: string;

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
  absAncY: number;

  @ApiProperty()
  @IsNumber()
  absAncX: number;

  @ApiProperty()
  @IsString()
  name: string;

  // Don't forget to use the class-validator decorators in the DTO properties.
}
