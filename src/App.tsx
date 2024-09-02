import { useEffect, useState } from "react";
import "./App.css";
import { Form, TForm } from "./components/Form";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <div id="root">
      <Form form={form} />
      <ToastContainer />
    </div>
  );
}

export default App;
