import React from 'react';
import { ThemeContext } from './ThemeContext';
import { BsSun, BsMoon } from 'react-icons/bs'

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div>
            {theme === 'dark' ? (
                <BsSun size={30} color="orange" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="cursor-pointer"/>
            ) : (
                <BsMoon size={30} color="black" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="cursor-pointer"/>
            )}
        </div>
    );
};

export default Toggle;