import { createSlice } from "@reduxjs/toolkit";

const CONTACTS_INITIAL_STATE = {
  filters: "",
  loading: false,
  error: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: CONTACTS_INITIAL_STATE,
  reducers: {
    changeFilter(state, action) {
      state.filters = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
