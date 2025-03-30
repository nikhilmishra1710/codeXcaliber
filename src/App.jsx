import './App.css'
import { Route, Routes } from 'react-router-dom';
import DeveloperPage from './pages/Team';
import Home from './pages/Home';

export default function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<DeveloperPage />} />
    </Routes>

  );
}
