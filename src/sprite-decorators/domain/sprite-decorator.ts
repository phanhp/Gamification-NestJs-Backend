import { ApiProperty } from '@nestjs/swagger';

export class SpriteDecorator {
  @ApiProperty()
  type: string;

  @ApiProperty()
  src: string;

  @ApiProperty()
  relSizeY: number;

  @ApiProperty()
  relSizeX: number;

  @ApiProperty()
  relPosY: number;

  @ApiProperty()
  relPosX: number;

  @ApiProperty()
  relAncY: number;

  @ApiProperty()
  relAncX: number;

  @ApiProperty()
  rateSizeX: number;

  @ApiProperty()
  rateSizeY: number;

  @ApiProperty()
  cond: string;

  @ApiProperty()
  alpha: number;

  @ApiProperty()
  adjRotAng: number;

  @ApiProperty()
  adjPosAng: number;

  @ApiProperty()
  absSizeY: number;

  @ApiProperty()
  absSizeX: number;

  @ApiProperty()
  absPosY: number;

  @ApiProperty()
  absPosX: number;

  @ApiProperty()
  absAncY: number;

  @ApiProperty()
  absAncX: number;

  @ApiProperty()
  name: string;

  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
