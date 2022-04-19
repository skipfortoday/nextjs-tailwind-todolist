import * as actionTypes from "../../../constants/actionTypes";
import * as api from "../api";

const setTodoList = (data) => {
  return {
    type: actionTypes.SET_USERS,
    data: data,
  };
};

export const fetchTodoList = (query) => async (dispatch) => {
  try {
    const data = await api.getTodoList(query);
    dispatch(setTodoList(data));
  } catch (err) {
    console.error(err);
  }
};
