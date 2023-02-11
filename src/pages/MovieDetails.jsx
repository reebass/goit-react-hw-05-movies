import { useState, useEffect, useRef } from 'react';
import { fetchFilmById } from 'API/Api';
import { Link, useLocation, useParams } from 'react-router-dom';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Loader } from 'components/Loader/Loader';
import styled from 'styled-components';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'



export default function MovieDetails () {
  const [movieDetails, setMovieDetails] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const backlinkRef = useRef(backLinkHref);

  useEffect(() => {
    const controller = new AbortController();
    const getMovieById = async () => {
      try {
        setIsLoading(true);
        const resp = await fetchFilmById(movieId, controller.signal);
        setMovieDetails(resp);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieById();
    return () => controller.abort()
  }, [movieId]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <BackLink to={backlinkRef.current}>
            <BsFillArrowLeftCircleFill/>
            Go Back</BackLink>
          <MovieInfo movieDetails={movieDetails} />
        </>
      )}
    </>
  );
};


const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 130px;
  margin: 0;
  padding: 5px;

  background-color: #f5f5f5;
  color: #123c4a;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  border-radius: 10px;

  transition: color 300ms ease, background-color 300ms ease;

  :hover {
    background-color: #ed9547;
  color: #f5f5f5;
  }

`
