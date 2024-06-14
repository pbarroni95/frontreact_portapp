import React, { useState } from 'react';
import BusquedaGatJs from '../components/BusquedaGatJs'; 
import BusquedaDatosInfobip from '../components/BusquedaDatosInfobip';
import BusquedaInfoPortinConDniJs from '../components/BusquedaInfoPortinConDniJs';
import ModalBusqueda from '../components/ModalBusqueda';


const Busqueda = () => {
  const [collection, setCollection] = useState('');
  const [attribute, setAttribute] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [pageSize] = useState(15);  // Número de resultados por página
  const [currentPage, setCurrentPage] = useState(1);  // Página actual
  const [results, setResults] = useState([]);  // Almacena los resultados

 

  const updateSearchFunction = () => {
    switch (collection) {
      case 'Gat':
        BusquedaGatJs(attribute, searchValue, pageSize, results, setResults, currentPage, setCurrentPage);
        break;
      case 'DatosInfobip':
        BusquedaDatosInfobip(attribute, searchValue, pageSize, results, setResults, currentPage, setCurrentPage);
        break;
      case 'InfoPortinConDni':
        BusquedaInfoPortinConDniJs(attribute, searchValue, pageSize, results, setResults, currentPage, setCurrentPage);
        break;
      default:
        console.log('Seleccione una colección válida');
    }
  };

  return (

    <div className='mt-10'>
      
    <div className="search-form flex flex-row bg-accent hover:border-2 hover:border-primary hover:bg-background  text-white p-6 rounded border-2 border-accent mr-44 ml-40   items-center space-x-10 gap-4 ">

      <div>

      <div className='flex flex-col '>
        <ModalBusqueda />
       </ div>

        <label htmlFor="collection" className="block mb-2" >Colección:</label>
        <select id="collection" className="bg-gray-800 text-white p-2 rounded cursor-pointer" value={collection} onChange={e => setCollection(e.target.value)}>
          <option value="Gat">GAT</option>
          <option value="DatosInfobip">INFOBIP (DNIS)</option>
          <option value="InfoPortinConDni">GAT VS DNI</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="attribute" className="block mb-2 mt-8">Atributo:</label>
        <select id="attribute" className="bg-gray-800 text-white p-2 rounded cursor-pointer" value={attribute} onChange={e => setAttribute(e.target.value)}>
          <option value="caso">CASO NUMERO</option>
          <option value="pnm">PNM</option>
          <option value="fcreac">FECHA CREAC AAAA-MM-DD</option>
          <option value="dni">DOCUMENTO NUMERO</option>
          <option value="donanteMercado">DONANTE MERCADO</option>
          <option value="nlinea">NUMERO LINEA</option>
        </select>
      </div>

      <div>
      <label htmlFor="searchValue" className="block mb-2 mt-8 ">Valor de Búsqueda:</label>
        <input type="text" id="searchValue" className="bg-gray-800 text-white p-2 rounded cursor-pointer" value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder="Valor" />
      </div>

      <button className ="py-2 px-4  border-2 border-text text-text transition-colors  hover:bg-primary hover:text-white hover:border-primary text-center font-bold rounded mt-16 mr-14 cursor-pointer" onClick={updateSearchFunction}>Buscar</button>
    </div>
    
    </div>

    
  );
};

export default Busqueda;
