import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPlaneacionRe from './pages/DashboardPlanecionRe';
import SeguimientoView from './pages/SeguimientoView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPlaneacionRe />} />
        <Route path="/seguimiento" element={<SeguimientoView />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App