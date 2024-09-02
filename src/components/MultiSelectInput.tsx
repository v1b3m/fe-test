import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { BaseInput } from "./SelectInput";
import { useDispatch } from "react-redux";
import { setForm } from "../store/formSlice";

export interface TMultiSelectInput extends BaseInput {
  label: string;
  type: "multi-select";
  options: string[];
  required: boolean;
  allowCustom: boolean;
}

export const MultiSelectInput = ({ field }: { field: TMultiSelectInput }) => {
  const [selected, setSelected] = useState<string[]>([]);
  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value as unknown as string[]);
    dispatch(setForm({ [field.name]: event.target.value }));
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{field.label}</InputLabel>
      <Select
        multiple
        value={selected}
        onChange={handleChange}
        input={<OutlinedInput label="Multiple Select" />}
        style={{ marginBottom: 10 }}
        required={field.required}
        name={field.name}
      >
        {field.options.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
