import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type LaunchAction = ActionType<typeof actions>;

export interface Launch {
  flight_number: number;
  mission_name: string;
  launch_date_utc: string;
  rocket: {
    second_stage: {
      payloads: [
        {
          nationality: string;
          manufacturer: string;
          payload_type: string;
        },
      ];
    };
  };
}

export interface LaunchState {
  readonly launches: Launch[];
  readonly loading: boolean;
  readonly error: boolean;
}
