import React from 'react';
import './App.css';
import{BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import Navbar from './components/Navbar';

function App() {
  return (
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signin' element={<SigninPage/>} />
    </Routes>
   <Home/>
    </Router>
  );
}

export default App;
