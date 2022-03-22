import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/header/Navbar';
// import Sidebar from './components/header/Sidebar';
import Home from './pages/Home';
import Project from './pages/Project';

const App = () => (
  <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  </div>
);

export default App;
