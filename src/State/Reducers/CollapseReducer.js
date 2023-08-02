import { SET_COLLAPSE_OPEN } from '../Actions/CollapseAction';

const initialState = {
  collapseOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLLAPSE_OPEN:
      return {
        ...state,
        collapseOpen: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
