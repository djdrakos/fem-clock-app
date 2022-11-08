import { useState } from 'react';
import Clock from '../Clock';
import Details from '../Details';
import StyledApp from './StyledApp'
import Quote from '../Quote'

function App() {
  const [detailsIsOpen, setDetailsIsOpen] = useState(false);

  const toggleDetails = () => {
    setDetailsIsOpen(state => !state);
  }
  
  return (
    <StyledApp>
      { detailsIsOpen || <Quote /> }
      <Clock detailsIsOpen={detailsIsOpen} toggleDetails={toggleDetails}/>
      { detailsIsOpen && <Details /> } 
    </StyledApp>
  );
}

export default App;
