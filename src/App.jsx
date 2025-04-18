import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Routes, Route } from 'react-router';

const App = () => {
  return (
    <div className="">
      <Navbar/>
      <div className='container mx-auto px-4 py-6'>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;