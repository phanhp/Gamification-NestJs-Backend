import { ApiProperty } from '@nestjs/swagger';

export class Reward {
  @ApiProperty()
  type: string;

  @ApiProperty()
  limitType: string;

  @ApiProperty()
  ease: number;

  @ApiProperty()
  amount: number;

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
