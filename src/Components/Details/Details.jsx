import axiosInstance from '../../axiosConfig/instance';
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
function Details() {
    const [movie,setMovie]= useState({})
    const {id}=useParams()
    async function getMovieById(){
        try{
            const res=await axiosInstance.get(`/movie/${id}`)
             setMovie(res.data)
            console.log(res)
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect( ()=>{
        getMovieById()
    },[id])
    return (
        <>
    <Card style= {{width: '18rem' }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
        <Card.Body>
         <Card.Title>{movie.title}</Card.Title>
         <Card.Text>{movie.overview}</Card.Text>
        </Card.Body>
    </Card>
        </>
    )
}

export default Details
