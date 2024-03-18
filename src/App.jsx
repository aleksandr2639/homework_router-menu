import HomePage  from './pages/HomePage';
import ForzaPage from './pages/ForzaPage';
import DriftPage from './pages/DriftPage';
import TimeAttackPage from './pages/TimeAttackPage';
import Menu from './components/Menu';
import { Route, Routes } from 'react-router-dom';
import './App.css'

function App() {

  return (
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
  );
}

export default App
