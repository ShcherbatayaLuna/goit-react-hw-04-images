import { useState, useEffect } from 'react';
import Api from 'Api/Api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';

export default function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    setIsLoading(true);
    Api(query, page)
      .then(data => setImages(prevState => [...prevState, ...data.data.hits]))
      .catch(error => setError(true))
      .finally(() => setIsLoading(false));
  }, [query, page]);

  const SearchQuery = event => {
    setPage(1);
    setQuery(event);
    setImages([]);
  };

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div className="App">
      <Searchbar SearchQuery={SearchQuery} />
      {error && <h2>{error.message}</h2>}
      {isLoading && <Loader />}
      {images.length > 0 && <ImageGallery images={images} />}
      {images.length >= 12 && <Button onLoadMore={onLoadMore} />}
    </div>
  );
}
