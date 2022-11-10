export const fetchAndJSON = async (url) => {
  const res = await fetch(url)
  const body = await res.json()
  return body
}