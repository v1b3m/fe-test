import { useEffect, useState } from "react";
import "./App.css";
import { Form, TForm } from "./components/Form";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  const [form, setForm] = useState<TForm>({ pages: [] });

  useEffect(() => {
    fetch("/api/config")
      .then((res) => res.json())
      .then((json) => {
        setForm(json as TForm);
      });
  }, []);

  return (
    <Provider store={store}>
      <div id="root">
        <Form form={form} />
        <ToastContainer />
      </div>
    </Provider>
  );
}

export default App;
