import { action } from 'typesafe-actions';

export function getRocketsRequest() {
  return action('@Rockets/GET_ROCKETS_REQUEST');
}

export function getRocketsSuccess({ rockets }: { rockets: [] }) {
  return action('@Rockets/GET_ROCKETS_SUCCESS', { rockets });
}

export function getRocketsError() {
  return action('@Rockets/GET_ROCKETS_FAILURE');
}
