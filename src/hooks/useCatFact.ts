import { type CatFact } from '../catFact.d'

export const useCatFact = async () => {
  return await fetch('https://catfact.ninja/fact')
    .then(async (res) => {
      if (!res.ok) throw new Error('Failed to fetch cat fact')
      return await res.json()
    })
    .then((data: CatFact) => {
      return data
    })
    .catch((err) => {
      throw err
    })
}
