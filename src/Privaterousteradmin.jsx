import React from 'react';
import { Navigate } from 'react-router-dom';

const Privaterouteradmin = ({ children }) => {
  const storedEmail = localStorage.getItem("userName"); 
  const storedPassword = localStorage.getItem("password"); 

  const isAdmin = storedEmail === "kunalpawar@gmail.com" && storedPassword === "1234";
  
  return isAdmin ? children : <Navigate to="/login" />;
};

export default Privaterouteradmin;
