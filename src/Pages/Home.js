import React from "react"
import {Link} from "react-router-dom"
import { useLocation } from 'react-router-dom';

// const Home = () => {
function Home() {
    const location = useLocation();
    
    const { username, password } = location.state || {};
   
   return (<div className="home-page">
      <div className="left-half">
        <img
          src="pe-logo-standard.png" // Replace with the actual image URL
          alt="Welcome Image"
        />
      </div>
      <div className="right-half">
        <ul>
        <h1>Welcome to the Home Page</h1>
        <p>Username: {username}</p>
        <p>Password: {password}</p>
        </ul>
        
      </div>
    </div>
  ); 
};
export default Home;