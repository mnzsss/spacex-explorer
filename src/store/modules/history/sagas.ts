import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actions from './actions';

import api from '../../../services/api';

export function* getHistories() {
  try {
    yield put(actions.getHistoriesRequest());

    const { data } = yield call(() => api.get('history?order=desc'));

    yield put(actions.getHistoriesSuccess({ histories: data }));
  } catch (err) {
    yield put(actions.getHistoriesError());
  }
}

export default all([
  takeLatest('@histories/GET_HISTORIES_REQUEST', getHistories),
]);
