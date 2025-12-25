import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DoraLandingPage from './components/pages/landing';
import LoginPage from './components/pages/login';
import RegisterPage from './components/pages/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DoraLandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  )
}

export default App
