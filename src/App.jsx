import React from 'react';
import Home from './pages/Home';

import { Routes, Route } from 'react-router';
import Navbar from './pages/Navbar';
import Explore from './pages/Explore';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='container mx-auto px-4 py-6'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/explore'element={<Explore/>}/>
          <Route path='/notifications' element={<Notifications/>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;