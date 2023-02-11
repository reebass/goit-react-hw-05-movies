import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: '388b8c32f7164678f9c3582a41e277c5',
};

export async function fetchTrendingFilms(request, object) {
  const response = await axios.get(`trending/movie/${request}`, {
    signal: object,
  });
  return response.data;
}

export async function fetchFilmById(id, object) {
  const response = await axios.get(`movie/${id}?language=en-US`, {
    signal: object,
  });
  return response.data;
}

export async function fetchCastFilmById(id, object) {
  const response = await axios.get(`movie/${id}/credits?language=en-US`, {
    signal: object,
  });
  return response.data;
}

export async function fetchReviewsFilmById(id, object) {
  const response = await axios.get(
    `movie/${id}/reviews?language=en-US&page=1`,
    { signal: object }
  );
  return response.data;
}
export async function fetchSearchMovie(SearchQuery, object) {
  const response = await axios.get(
    `search/movie?language=en-US&include_adult=false&query=${SearchQuery}`,
    { signal: object }
  );
  return response.data;
}
