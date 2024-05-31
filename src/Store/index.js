import { configureStore } from "@reduxjs/toolkit";
import itemslice from "./itemslice";
const store = configureStore({
    reducer:
    {
        item: itemslice.reducer,
    }
})
export default store;


