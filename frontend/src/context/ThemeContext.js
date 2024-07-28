import { createContext, useState } from "react";
import { useEffect } from "react";
export const ThemeContext = createContext();
export const ThemeContextProvider  = ({children}) =>{
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        document.body.className = "body"+(theme === 'light' ? 'dark':'light');
      }, [theme]);
    return(
    <ThemeContext.Provider value = {[theme, setTheme]}>
        {children}
    </ThemeContext.Provider>);
}