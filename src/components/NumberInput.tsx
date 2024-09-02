import { TextField } from "@mui/material";
import { BaseInput } from "./SelectInput";

export interface TNumberInput extends BaseInput {
  label: string;
  type: "number";
  required: boolean;
  min: number;
  max: number;
}

export const NumberInput = ({ field }: { field: TNumberInput }) => {
  return (
    <TextField
      type="number"
      label={field.label}
      style={{ marginBottom: 10 }}
      slotProps={{ htmlInput: { min: field.min, max: field.max } }}
    />
  );
};
