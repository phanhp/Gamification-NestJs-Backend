import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
  name: 'reward_image',
})
export class RewardImageEntity extends EntityRelationalHelper {
  @ApiProperty()
  @Column()
  type: string;

  @ApiProperty()
  @Column()
  src: string;

  @ApiProperty()
  @Column()
  relSizeY: number;

  @ApiProperty()
  @Column()
  relSizeX: number;

  @ApiProperty()
  @Column()
  relPosY: number;

  @ApiProperty()
  @Column()
  relPosX: number;

  @ApiProperty()
  @Column()
  relAncY: number;

  @ApiProperty()
  @Column()
  relAncX: number;

  @ApiProperty()
  @Column()
  rateSizeY: number;

  @ApiProperty()
  @Column()
  rateSizeX: number;

  @ApiProperty()
  @Column()
  cond: string;

  @ApiProperty()
  @Column()
  alpha: number;

  @ApiProperty()
  @Column()
  adjRotAng: number;

  @ApiProperty()
  @Column()
  adjPosAng: number;

  @ApiProperty()
  @Column()
  absSizeY: number;

  @ApiProperty()
  @Column()
  absSizeX: number;

  @ApiProperty()
  @Column()
  absPosY: number;

  @ApiProperty()
  @Column()
  absPosX: number;

  @ApiProperty()
  @Column()
  absAncY: number;

  @ApiProperty()
  @Column()
  absAncX: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;
}
