import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import WorkspacePlaneacion from './pages/WorkspacePlaneacion';
import DashboardRouter from './pages/DashboardRouter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path="/dashboard" element={<DashboardRouter />} />
        <Route path="/workspace" element={<WorkspacePlaneacion />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App