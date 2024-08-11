import { ApiProperty } from '@nestjs/swagger';

export class ButtonDecorator {
  @ApiProperty()
  type: string;

  @ApiProperty()
  roundCorner: number;

  @ApiProperty()
  relSizeY: number;

  @ApiProperty()
  relSizeX: number;

  @ApiProperty()
  relPosY: number;

  @ApiProperty()
  relPosX: number;

  @ApiProperty()
  relPivY: number;

  @ApiProperty()
  relPivX: number;

  @ApiProperty()
  rateSizeY: number;

  @ApiProperty()
  rateSizeX: number;

  @ApiProperty()
  lineWidth: number;

  @ApiProperty()
  lineColor: string;

  @ApiProperty()
  cond: string;

  @ApiProperty()
  color: string;

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
  absPivY: number;

  @ApiProperty()
  absPivX: number;

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
