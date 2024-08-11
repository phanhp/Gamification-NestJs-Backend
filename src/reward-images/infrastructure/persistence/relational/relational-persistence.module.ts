import { Module } from '@nestjs/common';
import { RewardImageRepository } from '../reward-image.repository';
import { RewardImageRelationalRepository } from './repositories/reward-image.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RewardImageEntity } from './entities/reward-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RewardImageEntity])],
  providers: [
    {
      provide: RewardImageRepository,
      useClass: RewardImageRelationalRepository,
    },
  ],
  exports: [RewardImageRepository],
})
export class RelationalRewardImagePersistenceModule {}
