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

axios.defaults.baseURL= 'http://localhost:8000';
axios.defaults.withCredentials=true
const App =() => {
  
  return (
    <>
    <BrowserRouter>
    <Toaster position='bottom-right' toastOptions={{duration:2000}} />
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/register' element={<Register />} />  
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  )  
}


export default App;

