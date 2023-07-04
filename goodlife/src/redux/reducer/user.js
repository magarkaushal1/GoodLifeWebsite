import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUserStore: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUserStore } = userSlice.actions;

export default userSlice.reducer;
