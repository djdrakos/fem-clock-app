import { formatTimezoneLocation } from './formatUtils';

export const fetchRandomQuote = async () => {
  const res = await fetch("https://programming-quotes-api.herokuapp.com/Quotes/random");
  const body = await res.json()
  return body
}

export const fetchLocation = async () => {

}

export const fetchCurrentTimeData = async () => {
  const res = await fetch("http://worldtimeapi.org/api/ip")
  const body = await res.json()
  const timeData = {
    dayOfWeek: body.day_of_week,
    dayofYear: body.day_of_year,
    startTime: body.unixtime,
    timezone: formatTimezoneLocation(body.timezone),
    timezoneAbbr: body.abbreviation,
    week: body.week_number,
  }
  return timeData
}