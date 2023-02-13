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
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route 
        path='/*' 
        element={
          <PrivateRoute path='/' element={<Home />} />
        }
      />
    </Routes>
    </AuthProvider>
  );
}

export default App;
