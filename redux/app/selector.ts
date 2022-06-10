import { createSelector } from "@reduxjs/toolkit";

const selectSelf = (state: RootState) => state.app;

export const selector = {
  selectIsShowLoading: createSelector(
    selectSelf,
    (state) => state.isShowLoading
  ),
};
