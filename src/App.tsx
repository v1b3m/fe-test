import "./App.css";
import { Form } from "./components/Form";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useGetConfigQuery } from "./store/formSlice";

function App() {
  const { data = { pages: [] }, error, isLoading } = useGetConfigQuery("");

  console.log({ data, error, isLoading });

  return (
    <div id="root">
      <Form form={data} />
      <ToastContainer />
    </div>
  );
}

export default App;
