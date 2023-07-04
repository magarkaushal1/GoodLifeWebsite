import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/auth";
import userReducer from "./reducer/user";
export default configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
    },
});