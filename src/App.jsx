import React, { useState } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom';
import axios from 'axios';
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/register/Register.jsx';
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from '../context/userCntact.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Services from './components/services/Services.jsx';
 
axios.defaults.baseURL= 'http://localhost:8000';
axios.defaults.withCredentials=true
const App =() => {
  
  return (
    
    <UserContextProvider>
    <BrowserRouter>
    <Toaster position='bottom-right' toastOptions={{duration:2000}} />
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/register' element={<Register />} />  
        <Route path='/login' element={<Login />} />
        <Route path='/services' element={<Services />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </UserContextProvider>
    
  )  
}


export default App;

