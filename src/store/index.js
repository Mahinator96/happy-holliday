import { configureStore } from "@reduxjs/toolkit";
import hollidaysReducer from "./hollidaysSlice";
import textReducer from "./textSlice";
import imageReducer from "./imgSlice";


export const store = configureStore({
	reducer: {
		hollidays: hollidaysReducer,
		text: textReducer,
		image: imageReducer,
	}
});
