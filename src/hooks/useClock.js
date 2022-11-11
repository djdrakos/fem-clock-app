import { useCallback, useEffect, useState } from 'react'
import { fetchAndJSON } from '../utils/fetchUtils'
import { formatDayOfWeek, formatTimezoneLocation } from '../utils/formatUtils';

const useClock = () => {
  const [ clockOptions, setClockOptions ] = useState({
    dayOfWeek: '',
    dayofYear: '',
    startTime: '',
    timezone: '',
    timezoneAbbr: '',
    week: '',
  })
  const [ currentTime, setCurrentTime ] = useState(null)
  const [ location, setLocation ] = useState(null)
  const [ startTime, setStartTime ] = useState(null)
  const [ status, setStatus ] = useState('idle')
  const [ timeOfDay, setTimeOfDay ] = useState(null)

  const getTimeOfDay = useCallback((time) => {
    const [hour] = time.split(':')

    if(hour >= 5 && hour < 12) return "morning"
    if(hour >= 12 && hour < 18 ) return "afternoon"
    if(hour >= 18 || hour < 5) return "evening"
  } , [])

  useEffect(() => {
    const setClock = async () => {
      try {
        setStatus('pending')

        const res = await fetchAndJSON("https://worldtimeapi.org/api/ip")
        
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
  
        const now = new Date(formattedClockOptions.startTime)
        setCurrentTime(`${now.getHours()}:${now.getMinutes()}`)
        setTimeOfDay(getTimeOfDay(`${now.getHours()}:${now.getMinutes()}`))

        const {city, country} = await fetchAndJSON(`https://api.getgeoapi.com/v2/ip/check?api_key=${process.env.REACT_APP_IPGEO_API_KEY}`)
        setLocation(`${city.name}, ${country.code}`)

      } catch (error) {
        throw error
      } finally {
        setStatus('resolved')
      }
    }

    setClock()
  }, [getTimeOfDay])

  useEffect(() => {
    if(status === 'resolved') {
      const tick = setInterval(() => {
        const timePassed = Date.now() - startTime
        const now = new Date(clockOptions.startTime + timePassed)
        setCurrentTime(`${now.getHours()}:${now.getMinutes()}`)
        setTimeOfDay(getTimeOfDay(`${now.getHours()}:${now.getMinutes()}`))
      }, 1000)  
      
      return () => clearInterval(tick)
    }
  }, [status, startTime, clockOptions, getTimeOfDay]) 

  return { 
    clockOptions, 
    currentTime, 
    location,
    status,
    timeOfDay
  } 
}

export default useClock