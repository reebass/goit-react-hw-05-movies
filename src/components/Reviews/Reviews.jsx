import { fetchReviewsFilmById } from 'API/Api';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Item, List, Text, Title } from './Reviews.styled';

export default function Reviews(){
  const [reviewsMovies, setReviewsMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const getReviewsFilmById = async movieId => {
      try {
        setIsLoading(true);
        const resp = await fetchReviewsFilmById(movieId, controller.signal);
        setReviewsMovies(selectKeysArrReviews(resp.results));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getReviewsFilmById(movieId);

    return () => controller.abort()
  }, [movieId]);

  const selectKeysArrReviews = arrReviews => {
    return arrReviews
      .map(({ author, content, id, created_at }) => {
        return { author, content, id, created_at };
      })
      .sort(
        (firstReviews, secondReviews) =>
          Date.parse(secondReviews.created_at) -
          Date.parse(firstReviews.created_at)
      );
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <List>
          {reviewsMovies.length !== 0 ?
            reviewsMovies.map(({ author, content, id }) => (
              <Item key={id}>
                <Title>Author:<span>{author}</span></Title>
                <Text>{content}</Text>
              </Item>
            )) : <Item><Text>There are no reviews here</Text></Item>}
        </List>
      )}
    </>
  );
};
