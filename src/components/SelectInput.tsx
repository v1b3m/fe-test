import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setForm } from "../store/formSlice";

export interface BaseInput {
  name: string;
  type: string;
}

export interface TSelectInput extends BaseInput {
  label: string;
  type: "select";
  options: string[];
  required: boolean;
}

export const SelectInput = ({ field }: { field: TSelectInput }) => {
  const [option, setOption] = React.useState("");
  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value);
    dispatch(setForm({ [field.name]: event.target.value }));
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{field.label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={option}
        label={field.label}
        onChange={handleChange}
        style={{ marginBottom: 10 }}
        required={field.required}
        name={field.name}
      >
        {field.options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
