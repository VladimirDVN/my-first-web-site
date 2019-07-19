import { CHANGE_COLOR } from "store/actionTypes";
import { PREV_COLOR } from "store/actionTypes";

const initialState = {
  color: "#ffffff",
  prev_color: "#ffffff",
  permit: false,
  color_ar: ["#ffffff"],
  color_ind: 0,
  color_cur: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
      state.prev_color = state.color;
      state.color = action.color;
      state.permit = true;
      state.color_ar.push(action.color);
      state.color_ind++;
      state.color_cur = state.color_ind;
      return Object.assign({}, state);
    case PREV_COLOR:
      state.color_cur--;
      if (state.color_cur <= "0") {
        state.permit = false;
      }
      state.color = state.color_ar[state.color_cur];
      // state.color = state.prev_color;

      return Object.assign({}, state);
    default:
      return state;
  }
};

export default reducer;
