
import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavoriteMovie } from './../../store/slices/favoriteMovie';
import Card from 'react-bootstrap/Card';


function Favorites() {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favoriteMovies.favoriteMovies);

    const removeFromFavorites = (movie) => {
        dispatch(removeFromFavoriteMovie(movie));
    };

    return (
        <div className="container">
            <h1>Favorite Movies</h1>
            <div className="row">
                {favorites.length > 0 ? (
                    favorites.map((movie) => (
                        <div key={movie.id} className="col-md-4 mb-4">
                            <Card>
                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>{movie.overview}</Card.Text>
                                    <button className="btn btn-danger" onClick={() => removeFromFavorites(movie)}>Remove</button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                ) : (
                    <p>No favorite movies found</p>
                )}
            </div>
        </div>
    );
}

export default Favorites
