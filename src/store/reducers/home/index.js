import * as actionTypes from "../../../constants/actionTypes";
import { updateObject } from "../../../constants/utility";

const initialState = {
  todoList: [],
};

const setTodoList = (state, data) => {
  return updateObject(state, {
    todoList: data,
  });
};

const reducer = (state = initialState, action) => {
  const { data, error } = action;
  switch (action.type) {
    case actionTypes.SET_USERS:
      return setTodoList(state, data);
    default:
      return state;
  }
};

export default reducer;
