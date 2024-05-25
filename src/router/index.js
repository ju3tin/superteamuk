import React from 'react'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'

import Main from '../containers/layouts/Main'
import MainAdmin from '../containers/layouts/MainAdmin'

// views
import About from '../containers/views/Main/About'
import Home from '../containers/views/Main/Home'
import Login from '../containers/views/Main/Login'
import NotFoundPage from '../components/NotFoundPage';
import Profile from '../containers/views/Profile/Default';

// admin Views

import Dashboard from '../containers/views/Admin/Dashboard'
import Setting from '../containers/views/Admin/Setting'

import Test from '../containers/views/Main/Test'
import West from '../containers/views/Main/West'

import Timeline from '../containers/views/Main/Timeline'

import ProfileLayout from '../containers/views/Profile/Default';

import Tiktok from '../containers/views/Main/Tiktok'
import Instagram from '../containers/views/Main/Instagram'

import ProfileAbout from '../containers/views/Profile/About'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Login />} />
        <Route path='/login.html' element={<Login />} />
        <Route path='/tiktok/:videoId' element={<Tiktok />} />
        <Route path='/instagram/:videoId' element={<Instagram />} />
        <Route path='/admin' element={<MainAdmin />} />
          <Route index element={<Login />} />
          <Route path='/admin/setting' element={<Setting />} />
        

        
        {/* <Route path="/" element={<Main />} />
        <Route index element={<Login />} /> */} 
          <Route path='/about' element={<About />} />
          <Route path='/test' element={<Test />} />
          <Route path='/west' element={<West />} />
          <Route path='/time' element={<Timeline />} />
        

        <Route path="/profile" element={<Profile />} />

          <Route path='/profile/profileabout' element={<ProfileAbout />} />

     
        <Route path="*" element={<NotFoundPage />} />


        <Route path="/profile" element={<ProfileLayout />}>
          <Route path="profileabout" element={<ProfileAbout />} />
          {/* Add more nested routes under /profile if needed */}
        </Route>

      </Routes>
    </Router>
  )
}

