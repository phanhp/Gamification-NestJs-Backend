import { ApiProperty } from '@nestjs/swagger';

export class GameApp {
  @ApiProperty()
  type: string;

  @ApiProperty()
  published: boolean;

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
