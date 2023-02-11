import { useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';
import toast from 'react-hot-toast';

export default function Movies(){
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const valueInput = form.elements.movie.value.trim();
    if(valueInput === '') {
      toast.error('Please enter movie title')
      form.reset()
      return
    } else {
      setSearchParams({ movieName: valueInput });
      form.reset();
    }

  };

  const updateQueryString = movie => {
    const nextParams = movie !== '' ? { movie } : {};
    setSearchParams(nextParams);
  };

  return (
    <SearchForm
      updateQueryString={updateQueryString}
      movieName={movieName}
      handleSubmit={handleSubmit}
    />
  );
};
