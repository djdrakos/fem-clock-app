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
  return body
}