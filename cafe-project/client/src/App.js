
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Footer from './components/Footer/Footer';

const contact = () => <div style={{padding: '20px'}}>Contact</div>;
const about = () => <div style={{padding: '20px'}}>About</div>;
const signUp = () => <div style={{padding: '20px'}}>Sign Up</div>;

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/contact" element={<Contact />} />*/}
        {/*<Route path="/about" element={<About />} />*/}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
       <Footer />
    </Router>
  );
}

export default App;