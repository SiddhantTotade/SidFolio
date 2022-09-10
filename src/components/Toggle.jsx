import { FaSun, FaMoon } from "react-icons/fa";
import React from 'react';
import { ThemeContext } from './ThemeContext';

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div>
            {theme === 'dark' ? (
                <FaSun onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="cursor-pointer" />
            ) : (
                <FaMoon onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="cursor-pointer" />
            )}
        </div>
    );
};

export default Toggle;