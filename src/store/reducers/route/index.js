import * as actionTypes from "../../../constants/actionTypes";
import { updateObject } from "../../../constants/utility";

const initialState = {
  title: "404",
};

const setTitle = (state, data) => {
  return updateObject(state, {
    title: data,
  });
};
const reducer = (state = initialState, action) => {
  const { data, error } = action;
  switch (action.type) {
    case actionTypes.SET_TITLE:
      return setTitle(state, data);
    default:
      return state;
  }
};

export default reducer;
