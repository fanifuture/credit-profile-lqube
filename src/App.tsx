import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import EntrepreneurLogin from './pages/auth/EntrepreneurLogin';
import EntrepreneurDashboard from './pages/entrepreneur/Dashboard';
import DataEntry from './pages/entrepreneur/DataEntry';
import Reports from './pages/entrepreneur/Reports';
import Profile from './pages/entrepreneur/Profile';
import MobileLayout from './components/layout/MobileLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<EntrepreneurLogin />} />
        <Route 
          path="/app" 
          element={<MobileLayout />}
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<EntrepreneurDashboard />} />
          <Route path="data-entry" element={<DataEntry />} />
          <Route path="reports" element={<Reports />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Navigate to="/app/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;