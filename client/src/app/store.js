import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import inviteReducer from "../features/invite/inviteSlice";
import logger from "redux-logger";

export default configureStore({
  reducer: {
    counter: counterReducer,
    invite: inviteReducer,
    goings: inviteReducer,
    notgoings: inviteReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
