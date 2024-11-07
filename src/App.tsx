import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebpageLayout from './layouts/WebpageLayout';
import RootPage from './app/index.tsx';
import ProfilPage from './app/profil/index.tsx';
import SejarahPage from './app/profil/sejarah/index.tsx';
import VisiMisiPage from './app/profil/visi-misi/index.tsx';
<<<<<<< HEAD
import KebijakanMutuPage from './app/profil/kebijakan-mutu/index.tsx';
=======
import MottoPage from './app/profil/motto/index.tsx';
import UnhandledPath from './components/UnhandledPath.tsx';
>>>>>>> 6e8b9f551d73b7d3b7f7b30fa9586891f4166963

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
          path="/profil/motto"
          element={
            <WebpageLayout page={<MottoPage />} />
          }
        />
        <Route 
          path="/profil/kebijakan-mutu" 
          element={
            <WebpageLayout page={<KebijakanMutuPage />} />
          } 
        />
      </Routes>

    </Router >
  )
}

export default App;
