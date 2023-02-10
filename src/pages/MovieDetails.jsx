import { useState, useEffect } from "react";
import { fetchFilmById } from "API/Api";
import {useParams} from 'react-router-dom'


export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState('')
  const {movieId} = useParams();

  useEffect(() => {
    const getMovieById = async () => {
        try{
            const resp = await fetchFilmById(movieId)
            setMovieDetails(resp)
            console.log(resp)
        }
        catch (error) {
            console.log(error)
        }
    }

    getMovieById()
  }, [movieId])
  return (
    <>
        {movieDetails && 
            <div>
                <img src={`https://image.tmdb.org/t/p/w400/${movieDetails.poster_path}`} alt="" />
                <h1>{movieDetails.title}</h1>
            </div>
        }
    </>
  )
};
