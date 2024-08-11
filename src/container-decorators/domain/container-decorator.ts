import { ApiProperty } from '@nestjs/swagger';

export class ContainerDecorator {
  @ApiProperty()
  type: string;

  @ApiProperty()
  relPosY: number;

  @ApiProperty()
  relPosX: number;

  @ApiProperty()
  cond: string;

  @ApiProperty()
  adjRotAng: number;

  @ApiProperty()
  adjPosAng: number;

  @ApiProperty()
  absPosY: number;

  @ApiProperty()
  absPosX: number;

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
