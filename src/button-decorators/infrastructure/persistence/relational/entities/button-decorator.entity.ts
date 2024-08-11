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
  name: 'button_decorator',
})
export class ButtonDecoratorEntity extends EntityRelationalHelper {
  @ApiProperty()
  @Column()
  type: string;

  @ApiProperty()
  @Column()
  roundCorner: number;

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
  relPivY: number;

  @ApiProperty()
  @Column()
  relPivX: number;

  @ApiProperty()
  @Column()
  rateSizeY: number;

  @ApiProperty()
  @Column()
  rateSizeX: number;

  @ApiProperty()
  @Column()
  lineWidth: number;

  @ApiProperty()
  @Column()
  lineColor: string;

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
  absPivY: number;

  @ApiProperty()
  @Column()
  absPivX: number;

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
