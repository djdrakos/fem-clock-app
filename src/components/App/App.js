import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../styles/global'
import themes from '../../styles/theme'
import { useEffect, useState } from 'react';
import Background from '../../components/Background';
import ClockDetails from '../ClockDetails';
import ClockDisplay from '../ClockDisplay';
import Quote from '../Quote'
import StyledApp from './StyledApp'
import ToggleClockDetails from '../ToggleClockDetails'
import useClock from '../../hooks/useClock'

function App() {
  const [ detailsIsOpen, setClockDetailsIsOpen ] = useState(false)
  const  { currentTime, clockOptions, status, timeOfDay } = useClock()
  const [ theme, setTheme ] = useState('day')
  
  useEffect(() => {
    if(timeOfDay === 'evening') setTheme('night')
    else setTheme('day')

  }, [timeOfDay])

  const toggleClockDetails = () => {
    setClockDetailsIsOpen(state => !state);
  }
  
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Background />
      <StyledApp as="main">
        { detailsIsOpen || <Quote /> }
          
        <ClockDisplay currentTime={currentTime} status={status} timeOfDay={timeOfDay} timezoneAbbr={clockOptions.timezoneAbbr}>
          <ToggleClockDetails detailsIsOpen={detailsIsOpen} toggleClockDetails={toggleClockDetails}/>
        </ClockDisplay>

        { detailsIsOpen && <ClockDetails clockOptions={clockOptions}/> }
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
