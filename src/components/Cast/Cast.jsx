import { fetchCastFilmById } from 'API/Api';
import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ImageActor, Item, List, Text, TextWrap } from './Cast.styled';

export default function Cast() {
  const [castMovie, setCastMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const getCastFilmById = async movieId => {
      try {
        setIsLoading(true);
        const resp = await fetchCastFilmById(movieId, controller.signal);
        setCastMovie(selectKeysArrCast(resp.cast));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCastFilmById(movieId);
    return () => controller.abort()
  }, [movieId]);

  const selectKeysArrCast = arrCast => {
    return arrCast
      .map(({ character, credit_id, original_name, profile_path, cast_id }) => {
        return { character, credit_id, original_name, profile_path, cast_id };
      })
      .sort((firstCast, secondCast) => firstCast.cast_id - secondCast.cast_id);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <List>
          {castMovie &&
            castMovie.map(
              ({ character, credit_id, original_name, profile_path }) => (
                <Item key={credit_id}>
                  <ImageActor
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w400/${profile_path}`
                        : 'https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png'
                    }
                    alt={original_name}
                  />
                  <TextWrap>
                    <Text>
                      <span>Name:</span> {original_name}
                    </Text>
                    <Text>
                      <span>Character:</span> {character ? character : 'unknown'}
                    </Text>
                  </TextWrap>
                </Item>
              )
            )}
        </List>
      )}
    </>
  );
};
