export const useCatImage = async ({
  firstWordCatFact
}: {
  firstWordCatFact: string
}) => {
  return await fetch(`https://cataas.com/cat/says/${firstWordCatFact}`)
    .then((res) => {
      if (!res.ok) throw new Error('Failed to fetch cat image')
      return res.url
    })
    .catch((err) => {
      throw err
    })
}
