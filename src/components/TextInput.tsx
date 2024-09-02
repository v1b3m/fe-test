import { TextField } from "@mui/material";
import { BaseInput } from "./SelectInput";

export interface TTextInput extends BaseInput {
  label: string;
  type: "text";
  required: boolean;
}

export const TextInput = ({ field }: { field: TTextInput }) => {
  return <TextField label={field.label} style={{ marginBottom: 10 }} />;
};
