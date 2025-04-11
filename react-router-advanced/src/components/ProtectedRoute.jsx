import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Import the custom hook

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Use the custom hook

  return isAuthenticated ? children : <Navigate to="/" />; // Redirect if not authenticated
};

export default ProtectedRoute;
