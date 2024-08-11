import {
  // decorators here

  IsString,
  IsNumber,
} from 'class-validator';

import {
  // decorators here
  ApiProperty,
} from '@nestjs/swagger';

export class CreateRewardTextDto {
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
  @IsNumber()
  relAncY: number;

  @ApiProperty()
  @IsNumber()
  relAncX: number;

  @ApiProperty()
  @IsNumber()
  fontSize: number;

  @ApiProperty()
  @IsString()
  fontFamily: string;

  @ApiProperty()
  @IsString()
  content: string;

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
