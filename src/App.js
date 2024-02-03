import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <Navigation />
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/videos/:videoId" element={<Video />} />
        <Route path="/videos/add" element={<Add />} />
        <Route path="/videos/edit/:videoId" element={<Edit />} /> */}
    </Routes>
    {/* <Footer /> */}
</Router>
  );
}

export default App;
