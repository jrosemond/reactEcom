import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/login" element={<Login/>} />
            </Routes>
          </div>
        <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
