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
  switch (field.type) {
    case "text":
      return <TextInput field={field} />;
    case "number":
      return <NumberInput field={field} />;
    case "select":
      return <SelectInput field={field} />;
    case "multi-select":
      return <MultiSelectInput field={field} />;
    default:
      return null;
  }
};
