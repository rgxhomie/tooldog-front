import { combineReducers, createStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";

const rootReducer = combineReducers({
    auth: authReducer
});

const store = createStore(rootReducer);

export default store;