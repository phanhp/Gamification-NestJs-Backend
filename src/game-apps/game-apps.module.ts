import { Module } from '@nestjs/common';
import { GameAppsService } from './game-apps.service';
import { GameAppsController } from './game-apps.controller';
import { RelationalGameAppPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [RelationalGameAppPersistenceModule],
  controllers: [GameAppsController],
  providers: [GameAppsService],
  exports: [GameAppsService, RelationalGameAppPersistenceModule],
})
export class GameAppsModule {}
