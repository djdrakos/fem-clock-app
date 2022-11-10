import { useState } from 'react';
import Main from '../Main';
import Details from '../Details';
import StyledApp from './StyledApp'
import Quote from '../Quote'
import useClock from '../../hooks/useClock'

function App() {
  const [ detailsIsOpen, setDetailsIsOpen ] = useState(false)
  const  { currentTime, clockOptions, status, timeOfDay } = useClock()
  
  const toggleDetails = () => {
    setDetailsIsOpen(state => !state);
  }
  
  return (
    <StyledApp>
      { detailsIsOpen || <Quote /> }
        
      <Main 
      currentTime={currentTime} 
      detailsIsOpen={detailsIsOpen} 
      status={status}
      timeOfDay={timeOfDay}
      timezoneAbbr={clockOptions.timezoneAbbr}
      toggleDetails={toggleDetails}
      />

      { detailsIsOpen && <Details clockOptions={clockOptions}/> }
    </StyledApp>
  );
}

export default App;
