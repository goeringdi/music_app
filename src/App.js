import { Container, Footer, Wrapper } from './App.styled';
import { AppRoutes } from "./routes";
import { ThemeContext, themes } from './context/theme';
import { useState } from 'react';

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light);
      console.log('dark')
      return;
    }

    setCurrentTheme(themes.dark);
  };

  return (
    <Wrapper>
      <Container>
        <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
          <AppRoutes />
          <Footer></Footer>
        </ThemeContext.Provider>
      </Container>
    </Wrapper>
  )
}

export default App
