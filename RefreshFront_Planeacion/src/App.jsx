import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPlaneacionRe from './pages/DashboardPlanecionRe';
import WorkspacePlaneacion from './pages/WorkspacePlaneacion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPlaneacionRe />} />
        <Route path="/workspace" element={<WorkspacePlaneacion />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App