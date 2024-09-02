import Box from "@mui/material/Box";
import { useState } from "react";
import { Page } from "./Page";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { next, prev } from "../store/formSlice";

export interface TForm {
  pages: Page[];
}

export const Form = ({ form }: { form: TForm }) => {
  const { pages } = form;

  const pageIndex = useSelector((state: RootState) => state.form.page);
  const currentPage = pages[pageIndex];

  const dispatch = useDispatch();

  const hasPrevPage = pageIndex > 0;
  const hasNextPage = pageIndex < pages.length - 1;

  const handleSubmit = (data: Record<string, unknown>) => {
    fetch("/api/submit", { body: JSON.stringify(data), method: "POST" })
      .then((res) => res.json())
      .then((json) => {
        console.log({ json });
        toast.success("Successfully submitted form!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to submit form");
      });
  };

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
            handleSubmit({ foo: "bar" });
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
            dispatch(prev());
          }}
        >
          Prev
        </Button>
        {pageIndex + 1} / {pages.length}
        <Button
          disabled={!hasNextPage}
          onClick={() => {
            dispatch(next());
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};
