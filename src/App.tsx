import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebpageLayout from './layouts/WebpageLayout';
import RootPage from './app/index.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WebpageLayout page={<RootPage />} />} />
      </Routes>
    </Router>
  )
}

export default App