import React from "react";
import ReactDOM from "react-dom";
//
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// import videoReducer, { videosFetch } from "./features/FetchVideoSlice";
//
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { fetchVideosApi } from "./features/FetchVideosApi";

//
const store = configureStore({
  reducer: {
    // videos: videoReducer,
    [fetchVideosApi.reducerPath]: fetchVideosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(fetchVideosApi.middleware);
  },
});
//
// store.dispatch(videosFetch());
//
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
