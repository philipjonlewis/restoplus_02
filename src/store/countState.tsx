import { createSlice } from '@reduxjs/toolkit';
export const countSlice = createSlice({
  name: 'count',
  initialState: {
    countValue: 0,
  },
  reducers: {
    setCounterCount: (state, action) => {
      return { ...state, countValue: action.payload };
    },
    countIncrement: (state, action) => {
      if (action.payload == 0) {
        return { ...state, countValue: state.countValue + 1 };
      }
      return { ...state, countValue: state.countValue + action.payload };
    },
    countDecrement: (state, action) => {
      if (action.payload == 0) {
        return { ...state, countValue: state.countValue - 1 };
      }
      return { ...state, countValue: state.countValue - action.payload };
    },
  },
});

export const { setCounterCount, countIncrement, countDecrement } =
  countSlice.actions;

export default countSlice.reducer;
