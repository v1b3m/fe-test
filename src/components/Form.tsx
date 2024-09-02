import Box from "@mui/material/Box";
import { useState } from "react";
import { Page } from "./Page";
import { Button } from "@mui/material";

export interface TForm {
  pages: Page[];
}

export const Form = ({ form }: { form: TForm }) => {
  const { pages } = form;
  console.log({ form });
  const [pageIndex, setPageIndex] = useState(0);
  const currentPage = pages[pageIndex];

  const hasPrevPage = pageIndex > 0;
  const hasNextPage = pageIndex < pages.length - 1;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="70%"
      bgcolor={"white"}
      color="black"
    >
      {currentPage && <Page page={currentPage} />}
      {!hasNextPage && (
        <Button
          onClick={() => {
            console.log("Submit");
          }}
        >
          Submit
        </Button>
      )}
      <Box>
        <Button
          disabled={!hasPrevPage}
          onClick={() => {
            setPageIndex((curr) => curr - 1);
          }}
        >
          Prev
        </Button>
        {pageIndex + 1} / {pages.length}
        <Button
          disabled={!hasNextPage}
          onClick={() => {
            setPageIndex((curr) => curr + 1);
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};
