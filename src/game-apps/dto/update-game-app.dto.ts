// Don't forget to use the class-validator decorators in the DTO properties.
// import { Allow } from 'class-validator';

import { PartialType } from '@nestjs/swagger';
import { CreateGameAppDto } from './create-game-app.dto';

export class UpdateGameAppDto extends PartialType(CreateGameAppDto) {}
