import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <AuthProvider>
    <Routes>
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/signup' element={<Signup />} />
      <React.Fragment path='/home' element={<Home />} />
    </Routes>
    </AuthProvider>
  );
}

export default App;
