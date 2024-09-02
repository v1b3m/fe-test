import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Field, TField } from "./Field";

export interface Page {
  title: string;
  fields: TField[];
}

export interface TForm {
  pages: Page[];
}

export const Page = ({ page }: { page: Page }) => {
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
