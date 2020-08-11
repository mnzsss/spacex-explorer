import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actions from './actions';

import api from '../../../services/api';

export function* getLaunches() {
  try {
    const { data } = yield call(() =>
      api.get('launches', {
        params: {
          order: 'desc',
        },
      }),
    );

    yield put(actions.getLaunchesSuccess({ launches: data }));
  } catch (err) {
    yield put(actions.getLaunchesError());
  }
}

export default all([takeLatest('@Launches/GET_LAUNCHES_REQUEST', getLaunches)]);
