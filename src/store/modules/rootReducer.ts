import { combineReducers } from 'redux';

import history from './history/reducer';
import launch from './launch/reducer';
import rocket from './rocket/reducer';

export default combineReducers({
  history,
  launch,
  rocket,
});
