import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Home/Footer';
import Navbar from './components/Navbar';
import Login from './components/Register/Login';
import Signup from './components/Register/Signup';
import Search from './components/Search/Search';
import Survey from './components/Survey';
import Request from './components/Request';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search/pro/:field" element={<Search />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/request/sent" element={<Request />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
