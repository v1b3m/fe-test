import { TextField } from "@mui/material";
import { BaseInput } from "./SelectInput";
import { useDispatch } from "react-redux";
import { setForm } from "../store/formSlice";

export interface TNumberInput extends BaseInput {
  label: string;
  type: "number";
  required: boolean;
  min: number;
  max: number;
}

export const NumberInput = ({ field }: { field: TNumberInput }) => {
  const dispatch = useDispatch();

  return (
    <TextField
      type="number"
      label={field.label}
      style={{ marginBottom: 10 }}
      slotProps={{ htmlInput: { min: field.min, max: field.max } }}
      required={field.required}
      name={field.name}
      onChange={(e) => {
        dispatch(setForm({ [field.name]: e.target.value }));
      }}
    />
  );
};
