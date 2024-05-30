import {configureStore} from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import movieSlice from "./movieSlice";
import searchSlice from "./searchSlice";


const store = configureStore({
    reducer:{
      app: userReducer,
      movie: movieSlice,
      search: searchSlice,
    }
});

export default store;