import React, { useState, useEffect } from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
// import LaptopFrame from './Components/LaptopFrame'; // Removed
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Home toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
