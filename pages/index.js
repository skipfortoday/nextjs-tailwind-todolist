import Head from "next/head";
import Breadcrumb from "../src/components/breadcrumb";
// import { initState } from "../src/constants/keys";
// import { fetchUsers } from "../src/store/actions/home";

const pathName = {
  parent: "Home",
  child: "Todolist Page",
  route: "/",
};

export default function Home() {
  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="Todolist Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-4">
        <Breadcrumb pathName={pathName} />
        <h1 className="text-4xl font-bold mt-5">Todolist Page</h1>
      </main>
    </>
  );
}
