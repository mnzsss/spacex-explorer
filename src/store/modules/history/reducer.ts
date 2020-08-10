import { Reducer } from 'redux';
import { HistoryState, HistoryAction } from './types';

const initialState: HistoryState = {
  histories: [],
  loading: false,
  error: false,
};

const historyReducer: Reducer<HistoryState> = (
  state = initialState,
  action: HistoryAction,
): HistoryState => {
  switch (action.type) {
    case '@histories/GET_HISTORIES_REQUEST':
      return { ...state, loading: true };
    case '@histories/GET_HISTORIES_SUCCESS':
      return { ...state, histories: action.payload.histories, loading: false };
    case '@histories/GET_HISTORIES_FAILURE':
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default historyReducer;
