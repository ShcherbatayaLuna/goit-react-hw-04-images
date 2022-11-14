import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Searchbar({ SearchQuery }) {
  const [input, setInput] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    SearchQuery(input);
    setInput('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={input}
          onChange={event => setInput(event.target.value)}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  SearchQuery: PropTypes.func.isRequired,
};
