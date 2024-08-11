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
  name: 'reward_text',
})
export class RewardTextEntity extends EntityRelationalHelper {
  @ApiProperty()
  @Column()
  type: string;

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
  fontSize: number;

  @ApiProperty()
  @Column()
  fontFamily: string;

  @ApiProperty()
  @Column()
  content: string;

  @ApiProperty()
  @Column()
  cond: string;

  @ApiProperty()
  @Column()
  color: string;

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
