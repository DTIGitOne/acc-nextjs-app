import { createSlice } from '@reduxjs/toolkit';

export const navigatingStateSlice:any = createSlice({
  name: 'navSlice',
  initialState: {
    navigating: false,
  },
  reducers: {
   setNavigating: (state, action) => {
      return {
         ...state,
         navigating: action.payload,
      };
   },
  },
});

export const { setNavigating } = navigatingStateSlice.actions;

export default navigatingStateSlice.reducer;