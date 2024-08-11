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
  name: 'color_decorator',
})
export class ColorDecoratorEntity extends EntityRelationalHelper {
  @ApiProperty()
  @Column()
  type: string;

  @ApiProperty()
  @Column()
  data: string;

  @ApiProperty()
  @Column()
  cond: string;

  @ApiProperty()
  @Column()
  alpha: number;

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
