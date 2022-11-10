import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../styles/global'
import themes from '../../styles/theme'
import { useEffect, useState } from 'react';
import Background from '../Background';
import Main from '../Main'
import useClock from '../../hooks/useClock'

function App() {

  const  { currentTime, clockOptions, location, status, timeOfDay } = useClock()
  const [ theme, setTheme ] = useState('day')
  
  useEffect(() => {
    if(timeOfDay === 'evening') setTheme('night')
    else setTheme('day')

  }, [timeOfDay])

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Background />
      <Main currentTime={currentTime} location={location} status={status} timeOfDay={timeOfDay} clockOptions={clockOptions}/>
    </ThemeProvider>
  );
}

export default App;
