import React, { useState } from 'react';
import axios from 'axios';

const BusquedaDatosInfobip = () => {
    const [attribute, setAttribute] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const BusquedaDatosInfobip = async () => {
        const url = `/api/api/busqueda/DatosInfobip/buscarPor/dni${attribute}/${searchValue}`;
        setLoading(true);
        try {
            const response = await axios.get(url);
            setResults(response.data);
            setError('');
        } catch (err) {
            setError('Error fetching data');
            console.error('Error en la búsqueda:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div>
                <label>Atributo:</label>
                <select value={attribute} onChange={e => setAttribute(e.target.value)}>
                    <option value="caso">CASO NUMERO</option>
                    <option value="pnm">PNM</option>
                    <option value="fcreac">FECHA CREAC AAAA-MM-DD</option>
                    <option value="dni">DOCUMENTO NUMERO</option>
                    <option value="donanteMercado">DONANTE MERCADO</option>
                    <option value="nlinea">NUMERO LINEA</option>
                </select>
            </div>
            <div>
                <label>Valor de Búsqueda:</label>
                <input type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder="Valor" />
            </div>
            <button onClick={BusquedaDatosInfobip}>{loading ? 'Buscando...' : 'Buscar'}</button>
            {error && <p>{error}</p>}
            <div>
                {results.length > 0 && (
                    <table>
                        <thead>
                            <tr>
                                <th>Fecha Infobip</th>
                                <th>Numero Dni</th>
                                <th>Cara Dni</th>
                                <th>Numero Linea</th>
                                <th>URL a imagen</th>
                                <th>Fecha que lo trajimos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((result, index) => (
                                <tr key={index}>
                                    <td>{result.date}</td>
                                    <td>{result.numero_dni}</td>
                                    <td>{result.cara_dni}</td>
                                    <td>{result.numero_linea}</td>
                                    <td>{result.url}</td>
                                    <td>{result.fecha_DatosInfobip_H}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};


export default BusquedaDatosInfobip;
