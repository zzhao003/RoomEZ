import { createSlice, configureStore } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null, loading: true, error: null },
  reducers: {
    // GET_USER_REQ(state) {
    //   return { loading: true };
    // },
    GET_USER_SUCCESS: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    GET_USER_FAILED: (state, action) => {
      state.error = action.payload;
      state.loading = false;
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
