import React, { useState } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom';

import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx';
import Login from './components/Login/Login.jsx';


const App =() => {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/login' element={<Login />} />  {/* Add login route */}
      </Routes>
    </BrowserRouter>
    </>
  )  
}


export default App;

