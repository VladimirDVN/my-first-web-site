import { CHANGE_COLOR } from "store/actionTypes";

const initialState = {
  color: "#ffffff"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
      state.color = action.color;
      return Object.assign({}, state);
    default:
      return state;
  }
};

export default reducer;
