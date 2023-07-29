import { configureStore } from "@reduxjs/toolkit";
import hollidaysReducer from "./hollidaysSlice";
import textReducer from "./textSlice";


export const store = configureStore({
	reducer: {
		hollidays: hollidaysReducer,
		text: textReducer,
	}
});
