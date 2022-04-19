import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface SearchState {
  search: string;
}

// Define the initial state using that type
const initialState: SearchState = {
  search: "",
};

export const stateSlice = createSlice({
  name: "search",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = stateSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default stateSlice.reducer;
