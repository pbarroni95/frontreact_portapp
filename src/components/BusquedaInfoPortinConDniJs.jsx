import React, { useState } from 'react';
import axios from 'axios';

const BusquedaInfoPortinConDniJs = () => {
  const [attribute, setAttribute] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Ajusta el tamaño de página según necesites

  const searchDataInfoPortinConDni = async () => {
    setLoading(true);
    setError('');
    try {
      const url = `https://api/busqueda/InfoPortinConDni/buscarPor/${attribute}/${searchValue}`;
      const { data } = await axios.get('https://api/busqueda/InfoPortinConDni/buscarPor');
      setResults(data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching data');
      console.error(error);
      setLoading(false);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    searchDataInfoPortinConDni();
  };

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <label>Attribute:</label>
        <select value={attribute} onChange={e => setAttribute(e.target.value)} className="p-2 rounded">
          {/* Define your options here */}
          <option value="dni">Documento Número</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div>
        <label>Search Value:</label>
        <input
          type="text"
          className="p-2 rounded"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
      </div>
      <button onClick={searchDataInfoPortinConDni} disabled={loading}>
        {loading ? 'Loading...' : 'Search'}
      </button>
      {error && <div className="text-red-500">{error}</div>}
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            {/* Customize your result display here */}
            {result.name} - {result.value}
          </li>
        ))}
      </ul>
      <div>
        {/* Pagination Controls */}
        {Array.from({ length: Math.ceil(results.length / pageSize) }, (_, i) => (
          <button key={i} onClick={() => handlePageDidChange(i + 1)} className={`p-2 ${currentPage === i + 1 ? 'bg-blue-500' : 'bg-gray-500'}`}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BusquedaInfoPortinConDniJs;
