import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type RocketsAction = ActionType<typeof actions>;

export interface Rocket {
  rocket_id: string;
  payload_weights: [
    {
      id: string;
      name: string;
    },
  ];
}

export interface RocketsState {
  readonly rockets: Rocket[];
  readonly loading: boolean;
  readonly error: boolean;
}
