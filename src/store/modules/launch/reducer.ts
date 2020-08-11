import { LaunchState, LaunchAction } from './types';

const initialState: LaunchState = {
  launches: [],
  loading: false,
  error: false,
};

const launchReducer = (
  state = initialState,
  action: LaunchAction,
): LaunchState => {
  switch (action.type) {
    case '@Launches/GET_LAUNCHES_REQUEST':
      return { ...state, loading: true };
    case '@Launches/GET_LAUNCHES_SUCCESS':
      return { ...state, launches: action.payload.launches, loading: false };
    case '@Launches/GET_LAUNCHES_FAILURE':
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default launchReducer;
