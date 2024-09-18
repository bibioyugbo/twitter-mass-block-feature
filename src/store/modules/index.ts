import {combineReducers} from "@reduxjs/toolkit";
import {notification} from "./notification.ts";
import store from "../index.ts";



export const rootReducer = combineReducers({
    notification: notification.reducer,

})
export type AppDispatch = typeof store.dispatch;


