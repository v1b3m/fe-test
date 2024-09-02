import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RootState } from "../store";
import { next, prev, useSubmitFormMutation } from "../store/formSlice";
import { Page } from "./Page";

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

  const [submitForm, result] = useSubmitFormMutation({});

  console.log({ result });

  const handleSubmit = (data: Record<string, unknown>) => {
    submitForm(data);
    toast.success("Form submitted successfully");
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
