import { useState } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Simulate user login status

  const login = () => setIsAuthenticated(true); // Simulate login
  const logout = () => setIsAuthenticated(false); // Simulate logout

  return { isAuthenticated, login, logout };
};
