import React, {useContext} from "react";
export const themes = {
    light: {
      color: '#000000',
      background: "#fff",      
      colorA:"#B1B1B1",
      
    },
    dark: {
      color: '#fff',
      background: "#181818",
    },
  };
  
  export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
  });  
  
  export const useThemeContext = () => {
    const theme = useContext(ThemeContext);  
    if(!theme) return theme.dark;  
    return theme;
  }