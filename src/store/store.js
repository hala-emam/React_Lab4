import { configureStore } from "@reduxjs/toolkit";
import languageReducer from './slices/LanguageSlice'

import loaderReducer from './slices/loader'
import favoriteMovieReducer from "./slices/favoriteMovie";
//we import all reducers here in store 
  const store=configureStore({
    reducer:{
        language:languageReducer,
        loader:loaderReducer,
        favoriteMovies:favoriteMovieReducer
    }
  })

  export default store;