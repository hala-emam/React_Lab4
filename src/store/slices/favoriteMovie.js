
import {createSlice} from '@reduxjs/toolkit'
 

const favoriteMoviesSlice=createSlice({
    name:'favoriteMovies',
    initialState:{favoriteMovies:[]},
    reducers:{
        addToFavoriteMovie: (state, action) => {
            state.favoriteMovies.push(action.payload); // Add the movie to favorites
        },
        removeFromFavoriteMovie: (state, action) => {
            state.favoriteMovies = state.favoriteMovies.filter(
              movie => movie.id !== action.payload.id
            ); // Remove the movie from favorites
        },
    }
})
export const { addToFavoriteMovie, removeFromFavoriteMovie } = favoriteMoviesSlice.actions;
export default favoriteMoviesSlice.reducer;