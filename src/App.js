import { Container, Footer, Wrapper } from './App.styled';
import { AppRoutes } from "./routes";
import { ThemeContext, themes } from './context/theme';
import { useState, useMemo } from 'react';


function App() {
  const [currentTheme, setTheme] = useState(themes.dark)

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setTheme(themes.light)
      return
    }
    setTheme(themes.dark)
  }
  const value = useMemo(() => ({ currentTheme, toggleTheme }), [currentTheme])

  return (
    <ThemeContext.Provider value={value}>
      <Wrapper>
        <Container>
          <AppRoutes />
          <Footer></Footer>
        </Container>
      </Wrapper>
    </ThemeContext.Provider>
  )
}

export default App
