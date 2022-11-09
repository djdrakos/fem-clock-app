export function formatTimezoneLocation(string) {
  const [country, city] = string.replaceAll('_', ' ').split('/')
  return { city, country }
}

export function formatDayOfWeek(number) {
  const daysOfTheWeek = {
    1: 'Mondau',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
  }
  return daysOfTheWeek[number]
}

export function formatHour(number) {
  if(number > 12) return (number - 12)
  else return number
}

export function formatMinutes(number) {
  if(number < 10) return `0${number}`
  else return number;
}