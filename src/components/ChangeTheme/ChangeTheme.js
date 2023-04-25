import React, { useState } from 'react';
import { MyContext } from '../../context/MyContext';

const ChangeTheme = ({ children }) => {

    const [isLightTheme, setIsLightTheme] = useState(true);    
    const ThemeColor = isLightTheme ? 'darkTheme' : 'lightTheme';
    const toggleTheme = () => setIsLightTheme(!isLightTheme);

    const theme = {
        isLightTheme,
        ThemeColor,
        toggleTheme        
    }

    return (
        <MyContext.Provider value={theme}>
            { children }
        </MyContext.Provider>
    );
};

export default ChangeTheme;