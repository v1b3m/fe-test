import { createSlice } from "@reduxjs/toolkit";

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
