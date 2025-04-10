import { createSlice } from '@reduxjs/toolkit';

export const selectNameFilter = state => state.filters.name;  //new
const slice = createSlice({
  name: 'filters',
  initialState: {
    name: "",
  },


reducers:{
    changeFilter:(state, action) => {     // actions
        state.name = action.payload;
        // state.value += action.payload;
      },
}}
)

export const { changeFilter } = slice.actions;  //export actions for dispatch
export default slice.reducer;





