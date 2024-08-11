import { Module } from '@nestjs/common';
import { RewardRepository } from '../reward.repository';
import { RewardRelationalRepository } from './repositories/reward.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RewardEntity } from './entities/reward.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RewardEntity])],
  providers: [
    {
      provide: RewardRepository,
      useClass: RewardRelationalRepository,
    },
  ],
  exports: [RewardRepository],
})
export class RelationalRewardPersistenceModule {}
