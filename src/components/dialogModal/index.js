export default function DialogModal({ data }) {
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
                    data.status === 0 ? "badge-accent" : "badge-primary"
                  }`}
                >
                  {data.status === 0 ? "Belum Selesai" : "Selesai"}
                </span>
              </span>
            </label>
            <input
              type="text"
              placeholder={"Title"}
              value={data?.title}
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
              value={data?.description}
            ></textarea>
          </div>

          <label htmlFor="my-modal-4" className="btn btn-sm btn-success">
            Tandai Selesai
          </label>
          <div className="float-right">
            <label htmlFor="my-modal-4" className="btn btn-sm btn-warning">
              Simpan
            </label>

            <label htmlFor="my-modal-4" className="btn btn-sm btn-error">
              Hapus
            </label>
          </div>
        </label>
      </label>
    </>
  );
}
