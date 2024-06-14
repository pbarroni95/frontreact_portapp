import React from 'react';
import ModalAdmin from '../components/ModalAdmin';


export const AdminApp = () => {
  return (
    <div className="bg-background p-12">

      {/*Contenedor principal*/}
      <div className="flex justify-between  mx-auto max-w-4xl">

        {/*Botón "modal" tutorial sobre procedimiento de gestiones etc de Docs.*/}
        


        {/*<!-- Box de Reseteo de Gestiones -->*/}
        <div className="flex flex-col bg-accent hover:border-2 hover:border-primary hover:bg-background transition-colors text-white p-6 rounded border-2 border-accent mr-6">
        <div className='flex flex-col mb-6'>
        <ModalAdmin />
          <span className="font-bold">RESETEO DE GESTIONES</span>
          <input type="text" placeholder="Seleccionar Archivo" className="p-1 rounded" />
          <button className="py-2 px-4  border-2 border-text text-text transition-colors  hover:bg-primary hover:text-white hover:border-primary text-center font-bold rounded mt-2">
            Subir Archivo
          </button>
          
        </div>
        </div>

        {/*<!-- Box de Agregar Links DNI -->*/}
        <div className="flex flex-col  bg-accent hover:border-2 hover:border-primary hover:bg-background  text-white p-6 rounded border-2 border-accent ">
        <div className='flex flex-col '>
        <ModalAdmin />
</ div>
          <span className="font-bold">AGREGAR LINKS DNI</span>
          <div className="flex space-x-2 mt-2">
            <input type="text" placeholder="DNI" className="p-1 rounded" />
            <input type="text" placeholder="LINK FRENTE" className="p-1 rounded" />
            <input type="text" placeholder="LINK DORSO" className="p-1 rounded" />
            <button className="py-2 px-4  border-2 border-text text-text transition-colors  hover:bg-primary hover:text-white hover:border-primary text-center font-bold rounded mt-2">
              OTRO
            </button>
          </div>

          <div className="flex space-x-2 mt-2">
            <input type="text" placeholder="DNI" className="p-1 rounded" />
            <input type="text" placeholder="LINK FRENTE" className="p-1 rounded" />
            <input type="text" placeholder="LINK DORSO" className="p-1 rounded" />
            <button className="py-2 px-4  border-2 border-text text-text transition-colors  hover:bg-primary hover:text-white hover:border-primary text-center font-bold rounded mt-2">
              OTRO
            </button>
          </div>

          <div className="flex space-x-2 mt-2">
            <input type="text" placeholder="DNI" className="p-1 rounded" />
            <input type="text" placeholder="LINK FRENTE" className="p-1 rounded" />
            <input type="text" placeholder="LINK DORSO" className="p-1 rounded" />
            <button className="py-2 px-4  border-2 border-text text-text transition-colors  hover:bg-primary hover:text-white hover:border-primary text-center font-bold rounded mt-2">
              OTRO
            </button>
          </div>

          <div className="flex space-x-2 mt-2">
            <input type="text" placeholder="DNI" className="p-1 rounded" />
            <input type="text" placeholder="LINK FRENTE" className="p-1 rounded" />
            <input type="text" placeholder="LINK DORSO" className="p-1 rounded" />
            <button className="py-2 px-4  border-2 border-text text-text transition-colors  hover:bg-primary hover:text-white hover:border-primary text-center font-bold rounded mt-2">
              OTRO
            </button>
          </div>

          <div className="flex mt-2">
            <button className="py-2 px-4  border-2 border-text text-text transition-colors  hover:bg-primary hover:text-white hover:border-primary text-center font-bold rounded mt-2 mr-3">
              AGREGAR LOTE DNI
            </button>
            <button className="py-2 px-4  border-2 border-text text-text transition-colors  hover:bg-primary hover:text-white hover:border-primary text-center font-bold rounded mt-2">
              ACTUALIZAR INFO PORTIN
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminApp;