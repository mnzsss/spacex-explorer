import { RocketsState, RocketsAction } from './types';

const initialState: RocketsState = {
  rockets: [],
  loading: false,
  error: false,
};

const rocketsReducer = (
  state = initialState,
  action: RocketsAction,
): RocketsState => {
  switch (action.type) {
    case '@Rockets/GET_ROCKETS_REQUEST':
      return { ...state, loading: true };
    case '@Rockets/GET_ROCKETS_SUCCESS':
      return { ...state, rockets: action.payload.rockets, loading: false };
    case '@Rockets/GET_ROCKETS_FAILURE':
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default rocketsReducer;
