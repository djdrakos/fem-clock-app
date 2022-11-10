import { useEffect, useState } from 'react'
import { fetchAndJSON } from '../utils/fetchUtils'
import { H3 } from './Typography'

export default function ClockLocation() {
  const [ location, setLocation ] = useState()

  useEffect(() => {
    const getLocation = async () => {
      const {city, country} = await fetchAndJSON(`https://api.getgeoapi.com/v2/ip/check?api_key=${process.env.REACT_APP_IPGEO_API_KEY}`)
      setLocation(`${city.name}, ${country.code}`)
    }

    getLocation()
  }, [])

  return(
    <H3 as="p">
      { location && `in ${location}` }
    </H3>
  )
}