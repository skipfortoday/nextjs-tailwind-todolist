import http from "../../services/NetworkService";

export const getTodoList = () => {
  return http.get("todo/1.0.0/to-do-list");
};
