import React from 'react'
import { useEffect,useState } from 'react'
import axiosInstance from './../../axiosConfig/instance'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Favorites from './../Favorites/Favorites';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavoriteMovie, removeFromFavoriteMovie } from './../../store/slices/favoriteMovie'
import { BsStar, BsStarFill } from 'react-icons/bs';
function Movies() {

  
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favoriteMovies.favoriteMovies);
    

    const toggleFavorite = (movie) => {
        const isFavorite = favorites.some(favorite => favorite.id === movie.id);
        if (isFavorite) {
            dispatch(removeFromFavoriteMovie(movie));
        } else {
            dispatch(addToFavoriteMovie(movie));
        }
    };
      // ############################
    const [movies,setMovies]=useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const navigate=useNavigate()

    

    useEffect(() => {
      fetchData(currentPage);
  }, [currentPage]);

  const fetchData = (page) => {
      axiosInstance.get(`/movie/popular?page=${page}`)
          .then((res) => {
              setMovies(res.data.results);
              setTotalPages(res.data.total_pages);
          })
          .catch((err) => {
              console.log(err);
          });
  };

  const handlePrevPage = () => {
      if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
      }
  };

  const handleNextPage = () => {
      if (currentPage < totalPages) {
          setCurrentPage(currentPage + 1);
      }
  };


    return (
        <>
        <div className="container">
        <Row xs={1} md={4} className="g-4">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <Col key={movie.id} className='mt-4'>
                <div className="h-100 d-flex flex-column">
                    <Card className="flex-grow-1">
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "1.4rem" , fontWeight:"500" }}>{movie.title}</Card.Title>
                            <Card.Text>{movie.overview}</Card.Text>
                            <div className="d-flex justify-content-between mt-auto">
                        <div>
                            <button className='btn btn-primary' onClick={() => navigate(`/Details/${movie.id}`)}>Details</button>
                        </div>
                        <div className="star-icon" onClick={() => toggleFavorite(movie)}>
                            {favorites.some(favorite => favorite.id === movie.id) ? <BsStarFill color="gold" size={36} /> : <BsStar color="gold" size={36} />}
                        </div>
                    </div>
                        </Card.Body>
                    </Card>
                  
                </div>
            </Col>
                    ))
                ) : (
                    <div>No movies found</div>
                )}
            </Row>
          {/* for pagination */}
          <div className="pagination d-flex justify-content-center m-4">
                <button className="btn btn-info px-3 mx-3 text-light" onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
                <span style={{ fontSize: "1rem", fontWeight: "400" }}>Page {currentPage} of {totalPages}</span>
                <button className="btn btn-success px-3 mx-3" onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>


        </div>

        </>
    )
}

export default Movies
