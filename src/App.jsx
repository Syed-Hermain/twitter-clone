import React from 'react';
import Home from './components/Home';

import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Explore from './components/Explore';
import Auth from './components/Auth';
import Profile from './components/Profile';
import Notifications from './components/Notifications';

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