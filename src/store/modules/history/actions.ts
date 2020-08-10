import { action } from 'typesafe-actions';

export const getHistoriesRequest = () =>
  action('@histories/GET_HISTORIES_REQUEST');

export const getHistoriesSuccess = ({ histories }: { histories: [] }) =>
  action('@histories/GET_HISTORIES_SUCCESS', { histories });

export const getHistoriesError = () =>
  action('@histories/GET_HISTORIES_FAILURE');
