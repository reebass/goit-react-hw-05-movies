import axios from "axios";


  axios.defaults.baseURL = 'https://api.themoviedb.org/3';
  axios.defaults.params = {
    api_key: '388b8c32f7164678f9c3582a41e277c5',
  };



export async function fetchTrendingFilms(request) {
    try {
      const response = await axios.get(`trending/movie/${request}`);
      return response.data
    } catch (error) {
      return Error(error);
    }
  }


export async function fetchFilmById(id) {
    try {
      const response = await axios.get(`movie/${id}?language=en-US`);
      return response.data
    } catch (error) {
      return Error(error);
    }
  }


