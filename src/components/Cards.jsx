import React from 'react';
import ButtonGeneric from './ButtonGeneric';
import Qgat from './Qgat';
import UltFechaHistorialGAT from './UltFechaHistorialGAT';
import ModalHome from './ModalHome';
import PortinClaro from './PortinClaro';
import PortinMovi from './PortinMovi';
import DniClaro from './DniClaro';
import DniMovi from './DniMovi';

{/*Botón "modal" tutorial sobre cada Card.*/} 

const Cards = () => {
  const cantidad = "cantidad";
  const ultfechahistorialGAT = "ultFechaHistorialGAT";
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
    <section className="text-white-600 body-font ml-44 mr-44">
      <div className="container mx-auto px-4 py-6 items-center">
        <div className="grid grid-cols-2 gap-4 items-center">
        <div className="col-span-1 flex flex-col gap-4 p-4">

            <div className="h-60 px-6 pt-6 pb-24 rounded-custom1 overflow-hidden text-center relative bg-accent hover:border-2 hover:border-primary hover:bg-background transition-colors border-2 border-accent">
            <div className='flex flex-col ml-2 '>
              <ModalHome />
              </div>
              <h2 className="tracking-widest text-xs title-font font-medium text-white mb-4 ">PASO 1
              </h2>
              <h5 className="title-font sm:text-2xl text-xl text-white mb-3 font-bold">
                Q GAT < Qgat />
              </h5>
              <div id="mensajeGat"></div>
              <ButtonGeneric onClick={confirmarYActualizarGAT} className="mb-3">
                ACTUALIZAR
              </ButtonGeneric>
              <h2 className="tracking-widest text-xs title-font font-medium text-white mt-3">
                última actualización <UltFechaHistorialGAT />
              </h2>
            </div>
          </div>


          <div className="p-2">
            <div className="h-60 px-6 pt-6 pb-24 rounded-custom1 overflow-hidden text-center relative bg-accent hover:border-2 hover:border-primary hover:bg-background transition-colors border-2 border-accent">
            <div className='flex flex-col ml-2 '>
              <ModalHome />
              </div>
              <h2 className="tracking-widest text-xs title-font font-medium text-white mb-4">PASO 2</h2>
              <h5 className="title-font sm:text-2xl text-xl text-white mb-3 font-bold">
                PREPARATIVOS PRE PNM
              </h5>
              <ButtonGeneric onClick={confirmarYActualizarDosSemanas} className="mb-4">
                ACTUALIZAR
              </ButtonGeneric>
              <div id="mensajePrePnm">
              <span id="mensajePostFirmas" className="tracking-widest text-xs title-font font-medium text-white mt-6">{mensajePostFirmas}</span>
              </div>
            </div>
          </div>
         

          <div className="col-span-1 rounded-lg p-2">
            <div className="h-94 px-6 pt-6  pb-19 rounded-custom1 overflow-hidden text-center relative bg-accent hover:border-2 hover:border-primary hover:bg-background transition-colors border-2 border-accent">
            <div className='flex flex-col ml-2 '>
              <ModalHome />
              </div>
              <h2 className="tracking-widest text-xs title-font font-medium text-white mb-4">PASO 3 - CLARO</h2>
              <h5 className="title-font sm:text-2xl text-xl text-white mb-3 font-bold mt-4">
                GENERACION PNM
              </h5>
              <div className="botones-form mt-6 mb-8">
                <ButtonGeneric onClick={confirmarYgenerarPdfs}>
                  GENERAR PNMs
                </ButtonGeneric>
              </div>
              <div className="flex items-center space-x-10 justify-center pb-4">
                <h5><PortinClaro /></h5>
                <h5><DniClaro /></h5>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <ButtonGeneric onClick={confirmarYsubirPdfsClaro} className="text-sm mb-4 border border-1">
                  SUBIR CLARO
                </ButtonGeneric>
                <ButtonGeneric onClick={moverSubidaAClaro} className="icon-button text-sm mb-4 border border-1">
                  Mover subida Claro
                </ButtonGeneric>
              </div>
            </div>
          </div>

          <div className="col-span-1 rounded-lg p-2">
            <div className="h-94 px-6 pt-6  pb-19 rounded-custom1 overflow-hidden text-center relative bg-accent hover:border-2 hover:border-primary hover:bg-background transition-colors border-2 border-accent">
            <div className='flex flex-col ml-2 '>
              <ModalHome />
              </div>
              <h2 className="tracking-widest text-xs title-font font-medium text-white mb-4">PASO 3 - MOVISTAR</h2>
              <h5 className="title-font sm:text-2xl text-xl text-white mb-3 font-bold mt-4">
                GENERACION PNM
              </h5>
              <div className="botones-form mt-6 mb-8">
                <ButtonGeneric onClick={confirmarYgenerarPdfs}>
                  GENERAR PNMs
                </ButtonGeneric>
              </div>
            <div className="flex  items-center space-x-10 justify-center pb-4">
            <h5><PortinMovi /></h5>
              <h5><DniMovi /></h5>
              </div>
              <div className="flex  items-center space-x-4 justify-center">
                <ButtonGeneric onClick={confirmarYsubirPdfsMovi} className="text-sm mb-4 border border-1">
                  SUBIR MOVI
                </ButtonGeneric>
                <ButtonGeneric onClick={moverSubidaAMovi} className="icon-button mb-4 text-sm border border-1">
                 Mover subida Movistar
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
