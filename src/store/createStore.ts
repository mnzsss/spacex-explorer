import { createStore, applyMiddleware, Middleware, Reducer } from 'redux';
import { HistoryAction, HistoryState } from './modules/history/types';
import { LaunchAction, LaunchState } from './modules/launch/types';

export interface StoreState {
  history: HistoryState;
  launch: LaunchState;
}

export type StoreAction = HistoryAction | LaunchAction;

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[],
) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
