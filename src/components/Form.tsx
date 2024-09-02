import {
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useState } from "react";

interface BaseField {
  name: string;
  type: string;
}

interface TTextField extends BaseField {
  label: string;
  type: "text";
  required: boolean;
}

interface TNumberField extends BaseField {
  label: string;
  type: "number";
  required: boolean;
  min: number;
  max: number;
}

interface TSelectField extends BaseField {
  label: string;
  type: "select";
  options: string[];
  required: boolean;
}

interface TMultiSelectField extends BaseField {
  label: string;
  type: "multi-select";
  options: string[];
  required: boolean;
  allowCustom: boolean;
}

type Field = TTextField | TSelectField | TNumberField | TMultiSelectField;

export interface Page {
  title: string;
  fields: Field[];
}

export interface TForm {
  pages: Page[];
}

const SelectField = ({ field }: { field: TSelectField }) => {
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

const MultiSelectField = ({ field }: { field: TMultiSelectField }) => {
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
    >
      {field.options.map((name) => (
        <MenuItem key={name} value={name}>
          {name}
        </MenuItem>
      ))}
    </Select>
  );
};

const Field = ({ field }: { field: Field }) => {
  if (field.type === "text") {
    return <TextField label={field.label} style={{ marginBottom: 10 }} />;
  }

  if (field.type === "number") {
    return (
      <TextField
        type="number"
        label={field.label}
        style={{ marginBottom: 10 }}
        slotProps={{ htmlInput: { min: field.min, max: field.max } }}
      />
    );
  }

  if (field.type === "select") {
    return <SelectField field={field} />;
  }

  if (field.type === "multi-select") {
    return <MultiSelectField field={field} />;
  }

  return null;
};

const Page = ({ page }: { page: Page }) => {
  const { title, fields } = page;
  return (
    <Box display="flex" flexDirection="column" textAlign="start">
      <Typography variant="h5" marginBottom={2}>
        {title}
      </Typography>
      {fields.map((field) => (
        <Field key={field.name} field={field} />
      ))}
    </Box>
  );
};

export const Form = ({ form }: { form: TForm }) => {
  const { pages } = form;
  console.log({ form });
  const [pageIndex, setPageIndex] = useState(0);
  const currentPage = pages[pageIndex];

  return <Box>{currentPage && <Page page={currentPage} />}</Box>;
};
