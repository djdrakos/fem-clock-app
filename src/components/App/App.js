import { useEffect, useState } from 'react';
import Clock from '../Clock';
import Details from '../Details';
import StyledApp from './StyledApp'
import Quote from '../Quote'
import { fetchCurrentTimeData } from '../../utils/fetchUtils'

function App() {
  const [detailsIsOpen, setDetailsIsOpen] = useState(false);
  const [ timeData, setTimeData ] = useState(null)

  useEffect(() => {
    fetchCurrentTimeData()
    .then((data) => setTimeData(data))
    }, [])

  const toggleDetails = () => {
    setDetailsIsOpen(state => !state);
  }
  
  return (
    <StyledApp>
      { detailsIsOpen || <Quote /> }
      <Clock timeData={timeData} detailsIsOpen={detailsIsOpen} toggleDetails={toggleDetails}/>
      { detailsIsOpen && <Details timeData={timeData} /> } 
    </StyledApp>
  );
}

export default App;
