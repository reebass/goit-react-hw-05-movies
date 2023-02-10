import { useLocation } from "react-router-dom";
import { FilmLink, Item } from "./FilmsItem.styled";

export const FilmsItem = ({ id, name }) => {
    const location = useLocation()
    return (
          <Item>
            <FilmLink to={`/movies/${id}`} state={{ from: location }}>{name}</FilmLink>
          </Item>
        )
  };
  