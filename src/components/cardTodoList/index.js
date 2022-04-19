import React from "react";
import { formatDate } from "../../constants/utility";

const CardTodoList = ({ detailTodoList, actionOnClick, NumberIndex }) => {
  return (
    <label
      htmlFor="my-modal-4"
      className=""
      onClick={() => actionOnClick(detailTodoList)}
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
          <p className="card-title text-lg">
            {detailTodoList.title}{" "}
            <span
              className={`badge badge-lg text-sm  ${
                detailTodoList.status === 0 ? "badge-accent" : "badge-primary"
              }`}
            >
              {detailTodoList.status === 0 ? "Belum Selesai" : "Selesai"}
            </span>
          </p>
          <p>{detailTodoList.description}</p>
        </div>
      </div>
    </label>
  );
};

export default CardTodoList;
