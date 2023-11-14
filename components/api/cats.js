export const getCats = async (limit=100, page=1) => {
  const URL = `http://192.168.1.2:3000/cats?${limit}&page=${page}`

  const request = await fetch(URL)

  return await request.json()
}