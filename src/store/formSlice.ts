import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TForm } from "../components/Page";

// Define a service using a base URL and expected endpoints
export const formApi = createApi({
  reducerPath: "formApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getConfig: builder.query<TForm, string>({
      query: () => `api/config`,
    }),
    submitForm: builder.mutation({
      query: (form) => ({
        url: "/api/submit",
        method: "POST",
        body: form,
      }),
    }),
  }),
});

export const { useGetConfigQuery, useSubmitFormMutation } = formApi;

export interface FormState {
  page: number;
}

const initialState: FormState = {
  page: 0,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    prev: (state) => {
      state.page -= 1;
    },
    next: (state) => {
      state.page += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { prev, next } = formSlice.actions;

export default formSlice.reducer;
