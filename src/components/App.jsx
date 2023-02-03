import {Routes, Route} from 'react-router-dom';
import {Home} from 'pages/Home';
import {Movies} from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';
import { Link } from './App.styled';


 
 export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/" end>Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/movies' element={<Movies />}/>
      <Route path='/movies/:movieId' element={<MovieDetails/>}/>
      <Route path='/movies/:movieId/cast' element={<Cast/>}/>
      <Route path='/movies/:movieId/reviews' element={<Reviews/>}/>
      </Routes>
    </div>
  );
};
