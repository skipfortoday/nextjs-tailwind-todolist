import { useDispatch, useSelector } from "react-redux";
import { setTodoFormData, updateTodoList } from "../../store/actions/home";

export default function DialogModal() {
  const dispatch = useDispatch();
  const { todoList, formDataTodo } = useSelector((state) => state.home);

  const handleSubmitForm = (dataForm) => {
    if (dataForm.id) {
      // jika tidak ada id maka edit data
      const taskList = todoList.filter((todo) => todo.id !== dataForm.id);
      dispatch(updateTodoList([...taskList, dataForm]));
    } else {
      // jika tidak ada id maka menambahkan data baru
      dataForm.id = todoList[todoList.length - 1]?.id + 1;
      dataForm.createdAt = new Date();
      dispatch(updateTodoList([...todoList, dataForm]));
    }
  };

  const handleClearTask = (dataForm) => {
    if (dataForm.id) {
      const taskList = todoList.filter((todo) => todo.id !== dataForm.id);
      dataForm.status = 1;
      dispatch(updateTodoList([...taskList, dataForm]));
    }
  };

  const handleDeleteTask = (dataForm) => {
    if (dataForm.id) {
      const taskList = todoList.filter((todo) => todo.id !== dataForm.id);
      dispatch(updateTodoList(taskList));
    }
  };

  return (
    <>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-bold">Title</span>
              <span className="label-text-alt font-bold">
                <span
                  className={`badge badge-lg text-sm  ${
                    formDataTodo?.status === 0
                      ? "badge-accent"
                      : "badge-primary"
                  }`}
                >
                  {formDataTodo?.status === 0 ? "Belum Selesai" : "Selesai"}
                </span>
              </span>
            </label>
            <input
              type="text"
              placeholder={"Title"}
              value={formDataTodo?.title}
              data-cy="taskTitle"
              onChange={(e) =>
                dispatch(
                  setTodoFormData({ ...formDataTodo, title: e.target.value })
                )
              }
              className="input input-bordered input-primary w-full input-sm font-semibold max-w-xs"
            ></input>
          </div>
          <div className="form-control mb-10">
            <label className="label">
              <span className="label-text font-bold">Description</span>
            </label>
            <textarea
              className="textarea textarea-primary w-full font-semibold"
              placeholder="Description"
              data-cy="taskDescription"
              onChange={(e) =>
                dispatch(
                  setTodoFormData({
                    ...formDataTodo,
                    description: e.target.value,
                  })
                )
              }
              value={formDataTodo?.description}
            ></textarea>
          </div>
          {formDataTodo?.status === 0 && (
            <label
              htmlFor="my-modal-4"
              className="btn btn-sm btn-success"
              onClick={() => handleClearTask(formDataTodo)}
              data-cy="clearTask"
            >
              Tandai Selesai
            </label>
          )}

          <div className="float-right">
            <label
              htmlFor="my-modal-4"
              className="btn btn-sm btn-warning"
              onClick={() => handleSubmitForm(formDataTodo)}
              data-cy="sumbitTask"
            >
              {!formDataTodo?.id ? "Create" : "Update"}
            </label>

            <label
              htmlFor="my-modal-4"
              className="btn btn-sm btn-error"
              onClick={() => handleDeleteTask(formDataTodo)}
              data-cy="deleteTask"
            >
              Hapus
            </label>
          </div>
        </label>
      </label>
    </>
  );
}
