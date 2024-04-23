import { createSlice } from "@reduxjs/toolkit";

const countInitialState = { number:0 };

const countSlice = createSlice ({
name:"count",
initialStatus: countInitialState,
reducers: {
   countChange(state, action) {
    
   }
  }

})
