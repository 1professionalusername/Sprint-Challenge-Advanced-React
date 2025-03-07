import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav>
            <div className='dark-mode__toggle' onClick={toggleMode}>
                <div className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </nav>
    );
};
export default Navbar;