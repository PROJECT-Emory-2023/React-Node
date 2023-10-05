import React from 'react'
import Nav from './Components/NavBar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import './App.css';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <React.Fragment> 
     <Nav />
    <div className='container'>
      {/* routes container */}
      <Routes>
        <Route path = '/Home' element = {<Home />} />
        <Route path = '/Login' element = { <Login /> } />
      </Routes>

    </div>
  </React.Fragment>
  );
}

export default App;
