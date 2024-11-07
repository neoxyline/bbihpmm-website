import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebpageLayout from './layouts/WebpageLayout';
import RootPage from './app/index.tsx';
import ProfilPage from './app/profil/index.tsx';
import SejarahPage from './app/profil/sejarah/index.tsx';
import VisiMisiPage from './app/profil/visi-misi/index.tsx';
import UnhandledPath from './components/UnhandledPath.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="*" 
          element={
            <WebpageLayout page={<UnhandledPath />} />
          } 
        />
        <Route 
          path="/" 
          element={
            <WebpageLayout page={<RootPage />} />
          } 
        />
        <Route
          path="/profil/sejarah"
          element={<WebpageLayout page={<SejarahPage />} />}
        />
        <Route
          path="/profil/visi-misi"
          element={<WebpageLayout page={<VisiMisiPage />} />}
        />
        <Route
          path="/profil/tentang-bbihpmm"
          element={<WebpageLayout page={<TentangBBIHPMM />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
