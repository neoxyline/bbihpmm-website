import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebpageLayout from './layouts/WebpageLayout';
import RootPage from './app/index.tsx';
import ProfilPage from './app/profil/index.tsx';
import SejarahPage from './app/profil/sejarah/index.tsx';
import VisiMisiPage from './app/profil/visi-misi/index.tsx';
import KebijakanMutuPage from './app/profil/kebijakan-mutu/index.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <WebpageLayout page={<RootPage />} />
          } 
        />
        <Route 
          path="/profil" 
          element={
            <WebpageLayout page={<ProfilPage />} />
          } 
        />
        <Route 
          path="/profil/sejarah" 
          element={
            <WebpageLayout page={<SejarahPage />} />
          } 
        />
        <Route 
          path="/profil/visi-misi" 
          element={
            <WebpageLayout page={<VisiMisiPage />} />
          } 
        />
        <Route 
          path="/profil/kebijakan-mutu" 
          element={
            <WebpageLayout page={<KebijakanMutuPage />} />
          } 
        />
      </Routes>
    </Router>
  )
}

export default App