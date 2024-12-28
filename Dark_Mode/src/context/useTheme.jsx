import { Children, createContext , useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = ()=>{
    return useContext(ThemeContext);
}

export const ThemeProvider = ({children})=>{
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? JSON.parse(savedTheme) : false;
    });
    // const [isDarkMode, setIsDarkMode] = useState(false); // Initially set to false
    const toggleTheme = ()=>{
        setIsDarkMode((prev) => !prev);
    };

    const theme = isDarkMode ? "dark" : "light";

    useEffect(()=>{
        document.documentElement.setAttribute("data-theme" , theme);
        localStorage.setItem("theme"  , JSON.stringify(isDarkMode));
    },[isDarkMode])
   

    return <ThemeContext.Provider value = {{theme , toggleTheme}}>
        {children}
    </ThemeContext.Provider>
}