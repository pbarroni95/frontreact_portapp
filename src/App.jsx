import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Firmas from './pages/Firmas';
import Header from './components/Header';
import AdminApp from './pages/AdminApp';
import Busqueda from './pages/Busqueda';

import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (
    
      <div className='bg-background min-h-screen text-white'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/firmas' element={<Firmas />} />
          <Route path='/adminapp' element={<AdminApp />} />
          <Route path='/busqueda' element={<Busqueda />} />
          </Routes>
      </div>
  
  );
}

export default App;
