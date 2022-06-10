import { reducer as userReducer } from "./user";
import { reducer as appReducer } from "./app";

export const reducer = {
  user: userReducer,
  app: appReducer,
};
