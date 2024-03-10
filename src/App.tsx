import { useEffect, useState } from 'react'
import { useCatFact } from './hooks/useCatFact'
import './App.css'
import { useCatImage } from './hooks/useCatImage'

function App() {
  const [firstWordCatFact, setFirstWordCatFact] = useState<string>('')
  const [imageURL, setImageURL] = useState<string>('')

  useEffect(() => {
    useCatFact()
      .then((data) => {
        const firstWord = data.fact.split(' ')[0]
        setFirstWordCatFact(firstWord)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  useEffect(() => {
    if (firstWordCatFact.length === 0) return
    useCatImage({ firstWordCatFact })
      .then((url) => {
        setImageURL(url)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [firstWordCatFact])

  const handleClick = () => {
    useCatFact()
      .then((data) => {
        const firstWord = data.fact.split(' ')[0]
        setFirstWordCatFact(firstWord)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <section>
      <h1>{firstWordCatFact}</h1>
      {typeof imageURL === 'string' && imageURL.length > 0 && (
        <img
          src={imageURL}
          alt='Image of cat obtained using the first world of a random cat fact'
        />
      )}
      <button onClick={handleClick}>Get new cat fact</button>
    </section>
  )
}

export default App
