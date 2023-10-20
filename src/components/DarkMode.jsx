import { useState, useEffect } from 'react';
import { MdLightMode, MdDarkMode } from "react-icons/md";
import PropTypes from 'prop-types'

const DarkMode = ( {myClass} ) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';

    if (isDarkModeEnabled) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
      setDarkMode(true);
    }
  };

  return (
    <button onClick={toggleDarkMode} className={myClass}>
      {darkMode ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
}

export default DarkMode;

DarkMode.propTypes = {
  myClass: PropTypes.string.isRequired
};