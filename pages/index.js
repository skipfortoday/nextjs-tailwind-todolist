import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../src/components/breadcrumb";
import CardTodoList from "../src/components/cardTodoList";
import DialogModal from "../src/components/dialogModal";
import { fetchTodoList } from "../src/store/actions/home";

const pathName = {
  parent: "Home",
  child: "Todolist Page",
  route: "/",
};

export default function Home() {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state.home);
  const [dataModal, setDataModal] = useState([]);

  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="Todolist Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-4">
        <DialogModal data={dataModal} />
        <Breadcrumb pathName={pathName} />
        <h1 className="text-4xl font-bold mt-5">Todolist Page</h1>
        <div className="flex flex-col w-full lg:flex-row mt-3">
          <div className="place-items-center">
            <div className="badge badge-accent text-lg font-semibold my-3  p-2">
              Belum Selesai
            </div>
            <label
              htmlFor="my-modal-4"
              className="btn btn-xs my-1 font-semibold float-right mt-1"
              // onClick={() => actionOnClick(detailTodoList)}
            >
              + Buat Task Baru
            </label>
            <div className=" grid xs:grid-cols-1 md:grid-cols-2 gap-3 ">
              {/* Filter data sesuai status selesai / status === 0 */}
              {todoList
                ?.filter((todo) => todo.status === 0)
                .map((item, index) => {
                  return (
                    <CardTodoList
                      actionOnClick={setDataModal}
                      detailTodoList={item}
                      NumberIndex={index}
                      key={index}
                    />
                  );
                })}
            </div>
          </div>
          <div className="divider lg:divider-horizontal"> & </div>
          <div className="place-items-center">
            <div className="badge badge-primary text-lg font-semibold my-3 p-2">
              Sudah Selesai
            </div>
            <div className=" grid xs:grid-cols-1 md:grid-cols-2 gap-3 ">
              {/* Filter data sesuai status selesai / status === 1 */}
              {todoList
                ?.filter((todo) => todo.status === 1)
                .map((item, index) => {
                  return (
                    <CardTodoList
                      actionOnClick={setDataModal}
                      detailTodoList={item}
                      NumberIndex={index}
                      key={index}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
