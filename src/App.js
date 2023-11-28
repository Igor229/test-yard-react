import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import BeskidPage from './pages/BeskidPage';
import WestPage from './pages/WestPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './style.scss';

function App() {
  return (
    <>
      <Header/>
        <HashRouter>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/beskid-home' element={<BeskidPage/>}/>
            <Route path='/west-town' element={<WestPage/>}/>
          </Routes>
        </HashRouter>
      <Footer/>
      
    </>
  );
}

export default App;
