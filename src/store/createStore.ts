import { createStore, applyMiddleware, Middleware, Reducer } from 'redux';
import { HistoryAction, HistoryState } from './modules/history/types';

export interface StoreState {
  history: HistoryState;
}

export type StoreAction = HistoryAction;

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[],
): any => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
