import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import SignUp from './pages/SignUp';
import Sign from './pages/Sign';
import Login from './pages/Login';
import Editior from './pages/Editior';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoPage/>} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/sign' element={<Sign />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/editor/:projectID' element={<Editior/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
