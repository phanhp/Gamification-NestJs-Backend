import { Module } from '@nestjs/common';
import { RewardTextRepository } from '../reward-text.repository';
import { RewardTextRelationalRepository } from './repositories/reward-text.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RewardTextEntity } from './entities/reward-text.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RewardTextEntity])],
  providers: [
    {
      provide: RewardTextRepository,
      useClass: RewardTextRelationalRepository,
    },
  ],
  exports: [RewardTextRepository],
})
export class RelationalRewardTextPersistenceModule {}
