import {
  // decorators here

  IsString,
  IsBoolean,
} from 'class-validator';

import {
  // decorators here
  ApiProperty,
} from '@nestjs/swagger';

export class CreateGameAppDto {
  @ApiProperty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsBoolean()
  published: boolean;

  @ApiProperty()
  @IsString()
  name: string;

  // Don't forget to use the class-validator decorators in the DTO properties.
}
