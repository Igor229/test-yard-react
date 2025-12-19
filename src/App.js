import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import BeskidPage from './pages/BeskidPage';
import WestPage from './pages/WestPage';
import ComfortPage from './pages/ComfortPage';
import Footer from './components/Footer';
import './style.scss';
import RiverPage from './pages/RiverPage';

function App() {
  return (
    <>
        <HashRouter>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/fomich-guesthouses' element={<BeskidPage/>}/>
            <Route path='/west-town' element={<WestPage/>}/>
            <Route path='/comfort-town' element={<ComfortPage/>}/>
            <Route path='/river-town' element={<RiverPage/>}/>
          </Routes>
        </HashRouter>
      <Footer/>
    </>
  );
}

export default App;
