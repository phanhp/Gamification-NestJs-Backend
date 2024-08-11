import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { GameApp } from '../../domain/game-app';

export abstract class GameAppRepository {
  abstract create(
    data: Omit<GameApp, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<GameApp>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<GameApp[]>;

  abstract findById(id: GameApp['id']): Promise<NullableType<GameApp>>;

  abstract update(
    id: GameApp['id'],
    payload: DeepPartial<GameApp>,
  ): Promise<GameApp | null>;

  abstract remove(id: GameApp['id']): Promise<void>;
}
