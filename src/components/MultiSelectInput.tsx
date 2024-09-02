import {
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { BaseInput } from "./SelectInput";

export interface TMultiSelectInput extends BaseInput {
  label: string;
  type: "multi-select";
  options: string[];
  required: boolean;
  allowCustom: boolean;
}

export const MultiSelectInput = ({ field }: { field: TMultiSelectInput }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value as unknown as string[]);
  };

  return (
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
  );
};
