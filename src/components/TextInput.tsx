import { TextField } from "@mui/material";
import { BaseInput } from "./SelectInput";
import { useDispatch } from "react-redux";
import { setForm } from "../store/formSlice";

export interface TTextInput extends BaseInput {
  label: string;
  type: "text";
  required: boolean;
}

export const TextInput = ({ field }: { field: TTextInput }) => {
  const dispatch = useDispatch();

  return (
    <TextField
      label={field.label}
      style={{ marginBottom: 10 }}
      required={field.required}
      name={field.name}
      onChange={(e) => {
        dispatch(setForm({ [field.name]: e.target.value }));
      }}
    />
  );
};
