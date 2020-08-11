import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actions from './actions';

import api from '../../../services/api';

export function* getRockets() {
  try {
    const { data } = yield call(() =>
      api.get('rockets', {
        params: {
          order: 'desc',
        },
      }),
    );

    yield put(actions.getRocketsSuccess({ rockets: data }));
  } catch (err) {
    yield put(actions.getRocketsError());
  }
}

export default all([takeLatest('@Rockets/GET_ROCKETS_REQUEST', getRockets)]);
