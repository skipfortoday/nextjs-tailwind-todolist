import * as actionTypes from "../../../constants/actionTypes";
import { initialStateTodo } from "../../../constants/keys";
import { updateObject } from "../../../constants/utility";

const initialState = {
  todoList: [],
  formDataTodo: initialStateTodo,
};

const setTodoList = (state, data) => {
  return updateObject(state, {
    todoList: data,
  });
};

const setTodoFormData = (state, data) => {
  return updateObject(state, {
    formDataTodo: data,
  });
};

const reducer = (state = initialState, action) => {
  const { data, error } = action;
  switch (action.type) {
    case actionTypes.SET_TODO_LIST:
      return setTodoList(state, data);
    case actionTypes.SET_TODO_FORM:
      return setTodoFormData(state, data);
    default:
      return state;
  }
};

export default reducer;
