import { createSelector } from "@reduxjs/toolkit";

const selectSelf = (state: RootState) => state.user;

export const selector = {
  selectData: createSelector(selectSelf, (state) => state.data),
  selectTransactionLogin: createSelector(
    selectSelf,
    (state) => state.transactionSignIn
  ),
  selectTransactionLogout: createSelector(
    selectSelf,
    (state) => state.transactionLogout
  ),
};
