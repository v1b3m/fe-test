import { useEffect, useState } from "react";
import "./App.css";
import { Box } from "@mui/material";
import { Form, TForm } from "./components/Form";

function App() {
  const [count, setCount] = useState(0);
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
    </div>
  );
}

export default App;
