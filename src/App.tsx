import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Ensure this file includes the global CSS
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Tictactoe } from './pages/Tictactoe.tsx';
import { Contact } from './pages/Contact.tsx';
import { Error } from './components/404.tsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/tictactoe" element={<Tictactoe />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
