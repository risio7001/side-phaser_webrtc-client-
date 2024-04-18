import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./reducers/gameInfo";

export const store = configureStore({
  reducer: {
    gameInfo: gameReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export type RootState = ReturnType<typeof store.getState>;
