import { MultiSelectInput, TMultiSelectInput } from "./MultiSelectInput";
import { NumberInput, TNumberInput } from "./NumberInput";
import { SelectInput, TSelectInput } from "./SelectInput";
import { TextInput, TTextInput } from "./TextInput";

export type TField =
  | TTextInput
  | TSelectInput
  | TNumberInput
  | TMultiSelectInput;

export const Field = ({ field }: { field: TField }) => {
  if (field.type === "text") {
    return <TextInput field={field} />;
  }

  if (field.type === "number") {
    return <NumberInput field={field} />;
  }

  if (field.type === "select") {
    return <SelectInput field={field} />;
  }

  if (field.type === "multi-select") {
    return <MultiSelectInput field={field} />;
  }

  return null;
};
