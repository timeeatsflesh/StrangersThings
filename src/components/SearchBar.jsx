import React, { useState } from 'react';
import { getFakePosts, getSearchResults } from '../api-adapter';

function SearchBar() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(getSearchResults());
      const data = await response.json();
      setSearch(data);
    } catch (error) {
      console.error(error)
    }
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
    const filteredResults = results.filter((result) =>
      result.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div>
      <input type="text" value={search} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
      {results.map((result) => (
        <div key={result.id}>
          <h2>{result.title}</h2>
          <p>{result.content}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchBar;
