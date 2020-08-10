import { action } from 'typesafe-actions';

export function getHistoriesRequest() {
  return action('@histories/GET_HISTORIES_REQUEST');
}

export function getHistoriesSuccess({ histories }: { histories: [] }) {
  return action('@histories/GET_HISTORIES_SUCCESS', { histories });
}

export function getHistoriesError() {
  return action('@histories/GET_HISTORIES_FAILURE');
}
