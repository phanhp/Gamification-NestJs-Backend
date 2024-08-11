import { Module } from '@nestjs/common';
import { GameAppRepository } from '../game-app.repository';
import { GameAppRelationalRepository } from './repositories/game-app.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameAppEntity } from './entities/game-app.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GameAppEntity])],
  providers: [
    {
      provide: GameAppRepository,
      useClass: GameAppRelationalRepository,
    },
  ],
  exports: [GameAppRepository],
})
export class RelationalGameAppPersistenceModule {}
