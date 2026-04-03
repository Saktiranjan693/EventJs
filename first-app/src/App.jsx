import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import header from './Components/header';


const App = () => {
  return (
    <div>
      <BrowserRouter>
          <header />
      </BrowserRouter>
      <h1 className='text-red-600'>hii</h1>
    </div>
  )
}

export default App
