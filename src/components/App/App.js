import { useEffect, useState } from 'react';
import Clock from '../Clock';
import Details from '../Details';
import StyledApp from './StyledApp'
import Quote from '../Quote'
import { fetchCurrentTimeData } from '../../utils/fetchUtils'

function App() {
  const [ detailsIsOpen, setDetailsIsOpen ] = useState(false);
  //time data from 3rd party api
  const [ timeData, setTimeData ] = useState(null)
  //internal timer
  const [ startTime, setStartTime ] = useState(null)
  //elapsed time adjusted to user's location
  const [ currentTime, setCurrentTime ] = useState(null)

  useEffect(() => {
    const startClock = async () => {
      const res = await fetchCurrentTimeData()
      //this clock is not a scientifically calibrated instrument, so we will not worry about potential millisecond differences between initializing the internal timer and resolving the HTTP request
      setTimeData(res)
      setStartTime(Date.now())
    }

    startClock()  
  }, [])
  
  useEffect(() => {
    if(startTime) {
      const tick =  setInterval(() => {
        const timePassed = Date.now() - startTime
        const now = new Date(timeData.startTime + timePassed)
        setCurrentTime(`${now.getHours()}:${now.getMinutes()}`)
      }, 1000)  
      
      return () => clearInterval(tick)
    }
  }, [timeData, startTime])

  
  const toggleDetails = () => {
    setDetailsIsOpen(state => !state);
  }
  
  return (
    <StyledApp>
      { detailsIsOpen || <Quote /> }
      <Clock 
        currentTime={currentTime} 
        timeData={timeData} 
        detailsIsOpen={detailsIsOpen} 
        toggleDetails={toggleDetails}
      />
      { detailsIsOpen && <Details timeData={timeData} /> } 
    </StyledApp>
  );
}

export default App;
