import { MovieItem } from 'components/MovieItem/MovieItem';
import { List } from './MovieList.styled';

export const MovieList = ({ films, children }) => {
  return (
    <>
      {children}
    <List>
      {films.map(({ id, title }) => (
        <MovieItem key={id} id={id} name={title}/>
      ))}
    </List>
    </>
  );
};
