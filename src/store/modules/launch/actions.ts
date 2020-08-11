import { action } from 'typesafe-actions';

export function getLaunchesRequest() {
  return action('@Launches/GET_LAUNCHES_REQUEST');
}

export function getLaunchesSuccess({ launches }: { launches: [] }) {
  return action('@Launches/GET_LAUNCHES_SUCCESS', { launches });
}

export function getLaunchesError() {
  return action('@Launches/GET_LAUNCHES_FAILURE');
}
