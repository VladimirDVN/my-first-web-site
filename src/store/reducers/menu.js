import { TOGGLE_MENU } from "store/actionTypes";

const initialState = {
  isOn: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      state.isOn = !state.isOn;
      return Object.assign({}, state);
    default:
      return state;
  }
};

export default reducer;
