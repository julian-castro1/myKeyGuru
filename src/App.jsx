import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import { auth } from './firebase'; // adjust the import to your file structure
import { signOut } from 'firebase/auth';
import { themes } from './themes';
import ThemeButton from './components/ThemeButton'
import Home from './components/Home'
import InventoryPage from './components/InventoryPage'

function App() {
  const [theme, changeTheme] = useState(themes.dark);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  function handleThemeChange(){
    theme.current === 'dark' ? changeTheme(themes.light) : changeTheme(themes.dark);
  }

  const logout = async () => {
    try {
      await signOut(auth);
      console.log('Logged out successfully');
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  return (
    <Router>
      <ThemeButton theme={theme} changeTheme={handleThemeChange} />
        <Routes>
          <Route path="/" element={
            user ? 
              <Home theme={theme} /> :
              <Navigate to="/login" />
          }/>
          <Route path='/login' element={
            user ? 
              <Navigate to="/inventory"/> : 
              <Login theme={theme} /> 
          } />
          <Route path="/inventory" element={
            user ? 
              <InventoryPage theme={theme} /> :
              <Navigate to="/login" />
          }/>
        </Routes>
    </Router>
  );
}

export default App;
