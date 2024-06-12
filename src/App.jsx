import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Firmas from './pages/Firmas';
import Header from './components/Header';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (
    
      <div className='bg-background min-h-screen text-white'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/firmas' element={<Firmas />} />
          </Routes>
        <Footer />
      </div>
  
  );
}

export default App;
