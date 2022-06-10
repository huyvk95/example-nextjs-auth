import { createSlice } from "@reduxjs/toolkit";

import { State } from "./type";

const initialState: State = {
  isShowLoading: false,
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isShowLoading = true;
    },
    hideLoading: (state) => {
      state.isShowLoading = false;
    },
  },
});

// > Export
// * Action
export const actions = { ...slice.actions };

// * Reducer
export const { reducer } = slice;
