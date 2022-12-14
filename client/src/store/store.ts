import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import { taskApi } from "./taskApi";

export const store = configureStore({
    reducer: {
        app: appReducer,
        [taskApi.reducerPath]: taskApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(taskApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
