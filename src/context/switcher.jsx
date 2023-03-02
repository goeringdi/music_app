import {useState} from "react";
import {MainPage} from '../pages/Main';
import { ThemeContext, themes } from "./theme";

export const  ChangeThemeTrack= () => {
  const [currentTheme, setCurrentTheme] = useState(themes.dark);

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light);
      return;
    }

    setCurrentTheme(themes.dark);
  };

    return (
      <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>        
          < MainPage />
      </ThemeContext.Provider>

    );
  };