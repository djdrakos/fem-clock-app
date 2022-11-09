export function formatTimezoneLocation(string) {
  const [country, city] = string.replaceAll('_', ' ').split('/')
  return { city, country }
}