import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Memoria from './Memoria';
import MemoriaShow from './Memoria/show';
import MemoriaStore from './Memoria/store';
import MemoriaUpdate from './Memoria/update';
import MemoriaDelete from './Memoria/delete';
import Fonte from './Fonte';
import FonteShow from './Fonte/show';
import FonteStore from './Fonte/store';
import FonteUpdate from './Fonte/update';
import FonteDelete from './Fonte/delete';
import Processador from './Processador';
import ProcessadorShow from './Processador/show';
import ProcessadorStore from './Processador/store';
import ProcessadorUpdate from './Processador/update';
import ProcessadorDelete from './Processador/delete';
import PlacaMae from './PlacaMae';
import PlacaMaeShow from './PlacaMae/show';
import PlacaMaeStore from './PlacaMae/store';
import PlacaMaeUpdate from './PlacaMae/update';
import PlacaMaeDelete from './PlacaMae/delete';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Memoria */}
        <Route path="/memoria" element={<Memoria />} />
        <Route path="/memoria/:id" element={<MemoriaShow />} />
        <Route path="/memoriaCreate" element={<MemoriaStore />} />
        <Route path="/memoriaUpdate/:id" element={<MemoriaUpdate />} />
        <Route path="/memoriaDelete/:id" element={<MemoriaDelete />} />
        {/* Fonte */}
        <Route path="/fonte" element={<Fonte />} />
        <Route path="/fonte/:id" element={<FonteShow />} />
        <Route path="/fonteCreate" element={<FonteStore />} />
        <Route path="/fonteUpdate/:id" element={<FonteUpdate />} />
        <Route path="/fonteDelete/:id" element={<FonteDelete />} />
        {/* Processador */}
        <Route path="/processador" element={<Processador />} />
        <Route path="/processador/:id" element={<ProcessadorShow />} />
        <Route path="/processadorCreate" element={<ProcessadorStore />} />
        <Route path="/processadorUpdate/:id" element={<ProcessadorUpdate />} />
        <Route path="/processadorDelete/:id" element={<ProcessadorDelete />} />
        {/* Placa Mãe */}
        <Route path="/placaMae" element={<PlacaMae />} />
        <Route path="/placaMae/:id" element={<PlacaMaeShow />} />
        <Route path="/placaMaeCreate" element={<PlacaMaeStore />} />
        <Route path="/placaMaeUpdate/:id" element={<PlacaMaeUpdate />} />
        <Route path="/placaMaeDelete/:id" element={<PlacaMaeDelete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
