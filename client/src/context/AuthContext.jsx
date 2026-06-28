import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === 'mock-jwt-token') {
      setUser({
        id: 'sachin-123',
        email: 'sachin@portfolio.com',
        name: 'Sachin Bansode',
        role: 'admin'
      });
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    if (email === 'sachin@portfolio.com' && password === 'admin') {
      const mockUser = {
        id: 'sachin-123',
        email: 'sachin@portfolio.com',
        name: 'Sachin Bansode',
        role: 'admin'
      };
      localStorage.setItem('token', 'mock-jwt-token');
      setUser(mockUser);
      return { success: true };
    } else {
      return {
        success: false,
        message: 'Invalid email or password. Use sachin@portfolio.com and admin.'
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};