import { credentials } from './credentials'

export const getCats = async () => {
  const TOKEN = credentials['cat-api']
  const URL = `https://api.thecatapi.com/v1/breeds`

  const request = await fetch(URL, {
    headers: {
      'x-api-key': TOKEN,
    },
  })

  return await request.json()
}