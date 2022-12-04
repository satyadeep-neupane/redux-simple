import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    INCREMENT: (state) => {
      state.value += 1;
    },
    DECREMENT: (state) => {
      state.value -= 1;
    },
  },
});

export const { INCREMENT, DECREMENT } = countSlice.actions;

export default configureStore({
  reducer: { myCounter: countSlice.reducer },
});
