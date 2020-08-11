import { createStore, applyMiddleware, Middleware, Reducer } from 'redux';
import { HistoryAction, HistoryState } from './modules/history/types';
import { LaunchAction, LaunchState } from './modules/launch/types';
import { RocketsAction, RocketsState } from './modules/rocket/types';

export interface StoreState {
  history: HistoryState;
  launch: LaunchState;
  rocket: RocketsState;
}

export type StoreAction = HistoryAction | LaunchAction | RocketsAction;

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[],
) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
