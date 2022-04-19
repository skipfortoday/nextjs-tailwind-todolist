import * as actionTypes from "../../../constants/actionTypes";
import { initialStateTodo } from "../../../constants/keys";
import * as api from "../api";

export const setTodoList = (data) => {
  return {
    type: actionTypes.SET_TODO_LIST,
    data: data,
  };
};

export const setTodoFormData = (data) => {
  return {
    type: actionTypes.SET_TODO_FORM,
    data: data,
  };
};

export const fetchTodoList = (query) => async (dispatch) => {
  try {
    const result = await api.getTodoList(query);
    dispatch(setTodoList(result));
  } catch (err) {
    console.error(err);
  }
};

export const updateTodoList = (data) => async (dispatch) => {
  try {
    dispatch(setTodoList(data));
    dispatch(setTodoFormData(initialStateTodo));
  } catch (err) {
    console.error(err);
  }
};
