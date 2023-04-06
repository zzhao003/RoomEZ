import { createSlice, configureStore } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    GET_USER_REQ(state) {
      return { loading: true };
    },
    GET_USER_SUCCESS(state, action) {
      return { loading: false };
    },
  },
});

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export const userActions = userSlice.actions;

export default store;
