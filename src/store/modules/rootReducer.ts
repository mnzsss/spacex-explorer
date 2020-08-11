import { combineReducers } from 'redux';

import history from './history/reducer';
import launch from './launch/reducer';

export default combineReducers({
  history,
  launch,
});
