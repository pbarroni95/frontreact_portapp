import React from 'react';
import ButtonGeneric from './ButtonGeneric';
import Qgat from './Qgat';
import UltFechaHistorialGAT from './UltFechaHistorialGAT';


const Cards = () => {
  const cantidad = "cantidad";
  const ultFechaHistorialGAT = "ultFechaHistorialGAT";
  const mensajePostFirmas = "mensajePostFirmas";
  const portinClaro = "portinClaro";
  const dniClaro = "dniClaro";
  const portinMovi = "portinMovi";
  const dniMovi = "dniMovi";

  const confirmarYActualizarGAT = () => {
    if (window.confirm('¿Estás seguro de que quieres actualizar el GAT?')) {
      console.log('Actualizar GAT');
      // Lógica para actualizar GAT
      alert('GAT actualizado con éxito');
    } else {
      console.log('Actualización de GAT cancelada');
    }
  };

  const confirmarYActualizarDosSemanas = () => {
    if (window.confirm('¿Estás seguro de que quieres actualizar dos semanas de Pre PNM?')) {
      console.log('Actualizar dos semanas de Pre PNM');
      // Lógica para actualizar dos semanas
      alert('Actualización de dos semanas de Pre PNM completada');
    } else {
      console.log('Actualización de dos de Pre PNM semanas cancelada');
    }
  };

  const confirmarYgenerarPdfs = () => {
    if (window.confirm('¿Estás seguro de que quieres generar los PNMs Masivo?')) {
      console.log('Generar PNMs');
      // Lógica para generar PNMs
      alert('PNMs Masivo generados con éxito');
    } else {
      console.log('Generación de PNMs Masivo cancelada');
    }
  };

  const confirmarYsubirPdfsMovi = () => {
    if (window.confirm('¿Estás seguro de que quieres subir los PDFs de Movi?')) {
      console.log('Subir PDFs Movi');
      // Lógica para subir PDFs Movi
      alert('PDFs de Movi subidos con éxito');
    } else {
      console.log('Subida de PDFs de Movi cancelada');
    }
  };

  const moverSubidaAMovi = () => {
    if (window.confirm('¿Estás seguro de que quieres mover la subida a Movi?')) {
      console.log('Mover subida a Movi');
      // Lógica para mover subida a Movi
      alert('Subida movida a Movi');
    } else {
      console.log('Mover subida a Movi cancelada');
    }
  };

  const confirmarYsubirPdfsClaro = () => {
    if (window.confirm('¿Estás seguro de que quieres subir los PDFs de Claro?')) {
      console.log('Subir PDFs Claro');
      // Lógica para subir PDFs Claro
      alert('PDFs de Claro subidos con éxito');
    } else {
      console.log('Subida de PDFs de Claro cancelada');
    }
  };

  const moverSubidaAClaro = () => {
    if (window.confirm('¿Estás seguro de que quieres mover la subida a Claro?')) {
      console.log('Mover subida a Claro');
      // Lógica para mover subida a Claro
      alert('Subida movida a Claro');
    } else {
      console.log('Mover subida a Claro cancelada');
    }
  };

  return (
    <section className="text-white-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
        <div className="p-4 lg:w-1/3">
            <div className="h-60 px-6 pt-9 pb-24 rounded-lg overflow-hidden text-center relative bg-accent hover:border-2 hover:border-primary hover:bg-background transition-colors">
              <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">PASO 1</h2>
              <h5 className="title-font sm:text-2xl text-xl text-white mb-3 font-bold">
                Q GAT < Qgat />
              </h5>
              <div id="mensajeGat"></div>
              <ButtonGeneric onClick={confirmarYActualizarGAT}>
                ACTUALIZAR
              </ButtonGeneric>
              <h2 className="tracking-widest text-xs title-font font-medium text-white mt-3">
                última actualización <UltFechaHistorialGAT />
              </h2>
            </div>
          </div>

          <div className="p-4 lg:w-1/3">
            <div className="h-60 px-6 pt-9 pb-24 rounded-lg overflow-hidden text-center relative bg-accent hover:border-2 hover:border-primary hover:bg-background transition-colors">
              <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">PASO 2</h2>
              <h5 className="title-font sm:text-2xl text-xl text-white mb-3 font-bold">
                PREPARATIVOS PRE PNM
              </h5>
              <div id="mensajePrePnm">
              <span id="mensajePostFirmas">{mensajePostFirmas}</span>
              </div>
              <ButtonGeneric onClick={confirmarYActualizarDosSemanas}>
                ACTUALIZAR
              </ButtonGeneric>
            </div>
          </div>

          <div className="p-4 lg:w-1/3">
            <div className="h-61 px-6 pt-9 pb-24 rounded-lg overflow-hidden text-center relative bg-accent hover:border-2 hover:border-primary hover:bg-background transition-colors">
              <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">PASO 3</h2>
              <h5 className="title-font sm:text-2xl text-xl text-white mb-3 font-bold">
                GENERACION PNM
              </h5>
              <div className="botones-form">
                <ButtonGeneric onClick={confirmarYgenerarPdfs}>
                  GENERAR PNMs
                </ButtonGeneric>
              </div>
              <div className="column-container" style={{ marginTop: '20px' }}>
                <h5 style={{ fontSize: '12px' }}>PORTIN CLARO <span id="portinClaro">{portinClaro}</span></h5>
                <h5 style={{ fontSize: '12px' }}>DNI CLARO <span id="dniClaro">{dniClaro}</span></h5>
                <h5 style={{ fontSize: '12px' }}>PORTIN MOVI <span id="portinMovi">{portinMovi}</span></h5>
                <h5 style={{ fontSize: '12px' }}>DNI MOVI <span id="dniMovi">{dniMovi}</span></h5>
              </div>
              <div className="column-container">
                <ButtonGeneric onClick={confirmarYsubirPdfsMovi}>
                  SUBIR MOVI
                </ButtonGeneric>
                <ButtonGeneric onClick={moverSubidaAMovi} className="icon-button">
                  <i className="fa-solid fa-clock-rotate-left" style={{ color: 'yellow' }}></i>
                </ButtonGeneric>
                <ButtonGeneric onClick={confirmarYsubirPdfsClaro}>
                  SUBIR CLARO
                </ButtonGeneric>
                <ButtonGeneric onClick={moverSubidaAClaro} className="icon-button">
                  <i className="fa-solid fa-clock-rotate-left" style={{ color: 'yellow' }}></i>
                </ButtonGeneric>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Cards;
