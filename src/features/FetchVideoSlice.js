// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// const initialState = {
//   items: [],
//   status: null,
//   error: null,
// };

// export const videosFetch = createAsyncThunk("videos/videosFetch", async () => {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/posts"
//     );
//     return response?.data; //?.data is used to check if the response is null or not
//   } catch (error) {
//     return error;
//   }
// });

// const fetchVideoSlice = createSlice({
//   name: "videos",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [videosFetch.pending]: (state, action) => {
//       state.status = "loading";
//     },
//     [videosFetch.fulfilled]: (state, action) => {
//       state.status = "success";
//       state.items = action.payload;
//     },
//     [videosFetch.rejected]: (state, action) => {
//       state.status = "Failed";
//       state.error = action.error.message;
//     },
//   },
// });

// export default fetchVideoSlice.reducer;
