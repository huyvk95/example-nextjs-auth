import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Transaction, User } from "../../types";

import { signIn, logout } from "./thunk";

type State = {
  data: User | null;
  transactionSignIn: Transaction;
  transactionLogout: Transaction;
};

// > State
const initialState: State = {
  data: null,
  transactionSignIn: { type: "created" },
  transactionLogout: { type: "created" },
};

// > Slice
const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, payload: PayloadAction<User | null>) => {
      state.data = payload.payload;
    },
    resetTransactionLogin: (state) => {
      state.transactionSignIn = { type: "created" };
    },
    resetTransactionLogout: (state) => {
      state.transactionLogout = { type: "created" };
    },
  },
  extraReducers: (builder) => {
    // - SignIn
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.transactionSignIn = { type: "finish" };
      state.data = action.payload;
    });
    builder.addCase(signIn.pending, (state) => {
      state.transactionSignIn = { type: "pending" };
    });
    builder.addCase(signIn.rejected, (state) => {
      state.transactionSignIn = { type: "finish" };
    });
    // - Logout
    builder.addCase(logout.fulfilled, (state) => {
      state.transactionLogout = { type: "finish" };
      state.data = null;
    });
    builder.addCase(logout.pending, (state) => {
      state.transactionLogout = { type: "pending" };
    });
    builder.addCase(logout.rejected, (state) => {
      state.transactionLogout = { type: "finish" };
    });
  },
});

// > Export
// * Action
export const actions = { ...slice.actions, signIn, logout };
// * Reducer
export const { reducer } = slice;
