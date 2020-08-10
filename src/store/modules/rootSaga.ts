import { all } from 'redux-saga/effects';

import history from './history/sagas';

export default function* rootSaga() {
  return yield all([history]);
}
