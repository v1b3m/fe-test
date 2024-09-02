import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";

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

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value);
  };

  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={option}
      label={field.label}
      onChange={handleChange}
      style={{ marginBottom: 10 }}
    >
      {field.options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
};
