// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import RedirectPage from './components/RedirectPage';
import StatsPage from './components/StatsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:shortcode" element={<RedirectPage />} />
        <Route path="/stats/:shortcode" element={<StatsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
