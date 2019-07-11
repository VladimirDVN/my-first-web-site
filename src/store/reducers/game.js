import { CHANGE_COLOR } from "store/actionTypes";
// import * as actions from "store/actionTypes";
// actions.CHANGE_COLOR

const initialState = {
  color: "#ffffff"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
      state.color = action.color;
      return state;
    default:
      return state;
  }
};

export default reducer;
