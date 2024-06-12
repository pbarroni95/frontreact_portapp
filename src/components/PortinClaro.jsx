import React, { useState, useEffect } from 'react';

function PortinClaro () {
    const [portinClaro, setPortinClaro] = useState(0); // Inicializa el estado con un valor por defecto

    useEffect(() => {
        fetch('http://127.0.0.1:8080/pdf/traerQPortinLocalClaro')
            .then(response => response.text())  // Asume que la respuesta es texto plano y lo convierte
            .then(data => {
                setPortinClaro(parseInt(data, 10)); // Convierte el texto a un número y actualiza el estado
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                setPortinClaro(0); // Manejo de errores: establece portinClaro a 0 si hay un error
            });
    }, []); // El array vacío asegura que este efecto se ejecute solo una vez después del montaje inicial

    return (
        <div>
            <span id="portinClaro">{portinClaro}</span>
        </div>
    );
}

export default PortinClaro;
