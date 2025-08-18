import { configureStore } from "@reduxjs/toolkit";
import uiManageReducer from "./uiManagments";

 const store=configureStore({
    reducer:{
        uiManageReducer
    }
})

export default store


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

