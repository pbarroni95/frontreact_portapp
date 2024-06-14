import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DniMovi = () => {
    const [count, setCount] = useState(0); // Inicializar el estado con 0

    useEffect(() => {
        // Función para cargar datos desde el backend
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/traerQDniLocalMovi'); // Ajusta la URL según sea necesario
                setCount(response.data); // Guardar los datos en el estado
            } catch (error) {
                console.error('Error al obtener datos:', error);
                setCount(0); // Opcional: Resetear el contador en caso de error
            }
        };

        fetchData(); // Llamar a la función al cargar el componente
    }, []); // El array vacío asegura que el efecto se ejecute solo una vez

    return (
        <div>
            <h1 className='ml-8 mr-14'>DNI Movi: {count}</h1>
        </div>
    );
};

export default DniMovi;
