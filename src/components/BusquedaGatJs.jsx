import React, { useState } from 'react';
import axios from 'axios';

const BusquedaGatJs = () => {
  const [attribute, setAttribute] = useState('');
  const [searchValue, setSearchFull] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Personaliza según necesidad

  const searchDataGat = async () => {
    setLoading(true);
    try {
      const url = `https://api/busqueda/Gat/buscarPor/${attribute}/${searchValue}`;
      const { data } = await axios.get('https://api/busqueda/Gat/buscarPor');
      setResults(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to fetch data');
      setLoading(false);
    }
  };

  const handleSearch = () => {
    searchDataGat();
  };

  return (
    <div className="flex flex-col space-y-4">
      <input
        type="text"
        value={attribute}
        onChange={(e) => setAttribute(e.target.value)}
        placeholder="Attribute"
        className="p-2 rounded"
      />
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchFull(e.target.value)}
        placeholder="Search Value"
        className="p-2 rounded"
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
      {error && <div>{error}</div>}
      <ul>
        {results.map((result, index) => (
          <li key={index} className="list-disc">
            {result.name} - {result.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusquedaGatJs;
