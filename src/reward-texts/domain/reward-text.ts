import { ApiProperty } from '@nestjs/swagger';

export class RewardText {
  @ApiProperty()
  type: string;

  @ApiProperty()
  relPosY: number;

  @ApiProperty()
  relPosX: number;

  @ApiProperty()
  relAncY: number;

  @ApiProperty()
  relAncX: number;

  @ApiProperty()
  fontSize: number;

  @ApiProperty()
  fontFamily: string;

  @ApiProperty()
  content: string;

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
