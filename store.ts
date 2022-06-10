import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  configureStore,
  ThunkAction,
  Action,
  Middleware,
  MiddlewareAPI,
  Dispatch,
  AnyAction,
  isRejectedWithValue,
} from "@reduxjs/toolkit";

import { reducer } from "./redux";

// > Middleware
export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: any) => {
    // eslint-disable-next-line
    console.log(action, " When there is no error in the middleware ", api);
    // Can only intercept, not 200 When
    if (isRejectedWithValue(action)) {
      /* eslint-disable */
      console.log(action, " middleware ");
      console.log(action.error.data.message, " error message ");
      console.warn(action.payload.status, " Current state ");
      console.warn(action.payload.data?.message, " error message ");
      console.warn(" Middleware intercepted ");
      /* eslint-enable */
    }
    return next(action);
  };

// > Store
export const store = configureStore({
  reducer,
});

// > Type
// * Hook type
export type AppDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  StoreState,
  unknown,
  Action<string>
>;
// * Global
declare global {
  type RootState = StoreState;
}

// > Handle type for hook react to global
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector;
