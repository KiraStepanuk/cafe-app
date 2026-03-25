import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';


const Home = () => <div style={{padding: '20px'}}>Home</div>;
const Contact = () => <div style={{padding: '20px'}}>Contact</div>;
const About = () => <div style={{padding: '20px'}}>About</div>;
const SignUp = () => <div style={{padding: '20px'}}>Sign Up</div>;

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;