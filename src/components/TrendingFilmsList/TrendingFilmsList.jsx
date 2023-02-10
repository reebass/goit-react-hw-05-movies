import { FilmsItem } from 'components/FilmsItem/FilmsItem';
import { List } from './TrendingFilmsList.styled';

export const TrendingFilmsList = ({ films }) => {
  return (
    <List>
      {films.map(({ id, title }) => (
        <FilmsItem key={id} id={id} name={title}/>
      ))}
    </List>
  );
};
