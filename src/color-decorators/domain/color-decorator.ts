import { ApiProperty } from '@nestjs/swagger';

export class ColorDecorator {
  @ApiProperty()
  type: string;

  @ApiProperty()
  data: string;

  @ApiProperty()
  cond: string;

  @ApiProperty()
  alpha: number;

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
