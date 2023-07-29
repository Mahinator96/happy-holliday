import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URI_API } from "../const/const";

export const fetchHollidays = createAsyncThunk(
	'holidays/fetchHollidays',
	async () => {
		const res = await fetch(URI_API);
		const data = await res.json();

		return data;
	}
)

const hollidaysSlice = createSlice({
	name: 'hollidays',
	initialState: {
		hollidays: {},
		holliday: '',
		loading: '',
	},
	reducers: {
		setHolliday(state, action) {
			state.holliday = action.payload;
		}
	},
	extraReducers: {
		[fetchHollidays.pending]: (state) => {
			state.loading = 'loading';
		},
		[fetchHollidays.fulfilled]: (state, action) => {
			state.loading = 'success';
			state.hollidays = action.payload;
		},
		[fetchHollidays.rejected]: (state) => {
			state.loading = 'failed';
			state.hollidays = {};
		},
	}
});

export const {setHolliday} = hollidaysSlice.actions;
export default hollidaysSlice.reducer;