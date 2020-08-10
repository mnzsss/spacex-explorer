import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type HistoryAction = ActionType<typeof actions>;

export interface HistoryState {
  readonly histories: [];
  readonly loading: boolean;
  readonly error: boolean;
}
