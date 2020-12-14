import {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import Subscribe from './pages/subscribe';
import ToogleButton from './components/ToogleButton'
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/global';


function App() {
  const [theme, settheme] = useState(light)
  
  const handleTheme = () => {
    theme.title==='dark'?settheme(light):settheme(dark);
  }

  return (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle/>
      <Subscribe/>
      <div className="containerFlex">      
        <ToogleButton handleTheme={handleTheme} theme={theme}></ToogleButton>
      </div>
    </div>
  </ThemeProvider>
  );
}

export default App;
