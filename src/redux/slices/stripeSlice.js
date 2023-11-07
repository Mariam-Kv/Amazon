import { createSlice } from "@reduxjs/toolkit";
import { paymentThunk } from "../thunks/paymentThunk";
let stripeSlice = createSlice({
  name: "stripe",
  initialState: { status: "", error: "", secret: "" },
  reducers: {
    defineSecret: (state, action) => {
      console.log(action.payload, 3456);
      state.secret = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(paymentThunk.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(paymentThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (action.payload) state.skills = action.payload;
      })
      .addCase(paymentThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});
export let stripeActions = stripeSlice.actions;
export let stripeReducer = stripeSlice.reducer;
