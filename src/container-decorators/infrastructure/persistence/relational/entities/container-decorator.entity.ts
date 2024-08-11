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
  name: 'container_decorator',
})
export class ContainerDecoratorEntity extends EntityRelationalHelper {
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
  cond: string;

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
