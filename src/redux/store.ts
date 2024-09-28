import { configureStore } from "@reduxjs/toolkit";
import { navigatingStateSlice } from "./slices/navigatingSlice";

export const store = configureStore({
    reducer: {
      navSlice: navigatingStateSlice,
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;