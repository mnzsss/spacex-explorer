import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type LaunchAction = ActionType<typeof actions>;

export interface Launch {
  flight_number: number;
  mission_name: string;
  launch_date_utc: string;
  launch_date_local: string;
  rocket: {
    rocket_id: string;
    second_stage: {
      payloads: [
        {
          nationality: string;
          manufacturer: string;
          payload_type: string;
          payload_mass_lbs: string;
        },
      ];
    };
  };
  links: {
    mission_patch: string;
    article_link: string;
    wikipedia: string;
    youtube_id: string;
    flickr_images: string[];
  };
}

export interface LaunchState {
  readonly launches: Launch[];
  readonly loading: boolean;
  readonly error: boolean;
}
