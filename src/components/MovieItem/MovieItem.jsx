import { useLocation } from "react-router-dom";
import { MovieLink, Item } from "./MovieItem.styled";

export const MovieItem = ({ id, name }) => {
    const location = useLocation()
    return (
          <Item>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>{name}</MovieLink>
          </Item>
        )
  };
  