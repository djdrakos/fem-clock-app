import { useState, useEffect } from 'react'
import { fetchClockOptions } from '../utils/fetchUtils'
import { formatDayOfWeek, formatTimezoneLocation } from '../utils/formatUtils';

const useClock = () => {
  const [ status, setStatus ] = useState('idle')
  const [ clockOptions, setClockOptions ] = useState({
    dayOfWeek: '',
    dayofYear: '',
    startTime: '',
    timezone: '',
    timezoneAbbr: '',
    week: '',
  })
  const [ startTime, setStartTime ] = useState(null)
  const [ currentTime, setCurrentTime ] = useState(null)
  
    
  useEffect(() => {
    const setClock = async () => {
      try {
        setStatus('pending')
  
        const res = await fetchClockOptions()
  
        setStartTime(Date.now())
  
        const formattedClockOptions = {
          dayOfWeek: formatDayOfWeek(res.day_of_week),
          dayofYear: res.day_of_year,
          startTime: new Date(res.datetime).getTime(),
          timezone: formatTimezoneLocation(res.timezone),
          timezoneAbbr: res.abbreviation,
          week: res.week_number,
        }
        
        setClockOptions(formattedClockOptions)
  
        const { startTime } = formattedClockOptions
        const now = new Date(startTime)
        setCurrentTime(`${now.getHours()}:${now.getMinutes()}`)
      } catch (error) {
        throw error
      } finally {
        setStatus('resolved')
      }
    }
    setClock()
  }, [])

  useEffect(() => {
    if(status === 'resolved') {
      const tick = setInterval(() => {
        const timePassed = Date.now() - startTime
        const now = new Date(clockOptions.startTime + timePassed)
        setCurrentTime(`${now.getHours()}:${now.getMinutes()}`)
      }, 1000)  
      
      return () => clearInterval(tick)
    }
  }, [status, startTime, clockOptions]) 

  return { 
    currentTime, 
    status,
    clockOptions, 
  } 
}

export default useClock