import React from "react";
import { formatDate } from "../../constants/utility";

const CardTodoList = ({ detailTodoList, actionOnClick, NumberIndex }) => {
  return (
    <label
      htmlFor="my-modal-4"
      className=""
      onClick={() => actionOnClick(detailTodoList)}
      data-cy={`todoList${detailTodoList.id}`}
    >
      <div
        className="card bg-base-100 shadow-xl  modal-button hover:bg-slate-200 cursor-pointer"
        htmlFor="my-modal-4"
      >
        <div className="card-body">
          <p className="text-sm">
            <span className="font-bold">#{NumberIndex + 1}.</span>{" "}
            {formatDate(detailTodoList.createdAt)}
          </p>
          <p className="card-title text-sm">
            {detailTodoList.title}{" "}
            <span
              className={`badge badge-lg text-xs ${
                detailTodoList.status === 0 ? "badge-accent" : "badge-primary"
              }`}
            >
              {detailTodoList.status === 0 ? "Belum Selesai" : "Sudah Selesai"}
            </span>
          </p>
          <p className="text-sm">{detailTodoList.description}</p>
        </div>
      </div>
    </label>
  );
};

export default CardTodoList;
