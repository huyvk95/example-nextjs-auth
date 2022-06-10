import { createSlice } from "@reduxjs/toolkit";

import { User } from "../../types";

type State = {
  data?: User;
};

// > State
const initialState: State = {
  data: undefined,
};

// > Slice
const slice = createSlice({
  name: "wallet",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

// > Export
// * Action
export const actions = { ...slice.actions };
// * Reducer
export const { reducer } = slice;
