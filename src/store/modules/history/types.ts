import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type HistoryAction = ActionType<typeof actions>;

interface History {
  id: number;
  title: string;
  event_date_utc: string;
  links: {
    article: string;
  };
}

export interface HistoryState {
  readonly histories: History[];
  readonly loading: boolean;
  readonly error: boolean;
}
