import {minimalActions} from '../actions/actions';

const initialState = {
  favorites: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case minimalActions.AUTHENTIFICATED:
      return {
          ...state,
      }
    default:
      return state;
  }
};
