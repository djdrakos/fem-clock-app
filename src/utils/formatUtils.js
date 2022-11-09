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

export function formatTime(time) {
  const [ hour, minutes ] = time.split(':')
  
  return `${hour > 12 ? hour - 12 : hour}:${minutes.length === 1 ? `0${minutes}` : minutes}`
}