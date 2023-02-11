import { useEffect, useState } from 'react';
import { fetchSearchMovie } from 'API/Api';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import { Button, Form, Input } from 'components/SearchForm/SearchForm.styled';

export const SearchForm = ({ updateQueryString, movieName, handleSubmit }) => {
  const [searchMovie, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    if (movieName === '') {
      return;
    }
    const getSearchMovie = async movieName => {
      try {
        setIsLoading(true);
        const resp = await fetchSearchMovie(movieName, controller.signal);
        if (resp.results.length !== 0) {
          setSearchMovies(resp.results);
        } else {
          toast.error(`${movieName} movie not found`);
          setSearchMovies([]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getSearchMovie(movieName);
    return () => controller.abort();
  }, [movieName]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="movie"
          onChange={() => updateQueryString(movieName)}
        />
        <Button type="submit">Search</Button>
      </Form>
      {isLoading ? <Loader /> : <MovieList films={searchMovie} />}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
