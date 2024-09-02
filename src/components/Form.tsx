import Box from "@mui/material/Box";
import { useState } from "react";
import { Page } from "./Page";

export interface TForm {
  pages: Page[];
}

export const Form = ({ form }: { form: TForm }) => {
  const { pages } = form;
  console.log({ form });
  const [pageIndex, setPageIndex] = useState(0);
  const currentPage = pages[pageIndex];

  return <Box>{currentPage && <Page page={currentPage} />}</Box>;
};
