import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root: HTMLElement | null = document.getElementById('root')
if (root !== null) {
  ReactDOM.createRoot(root).render(<App />)
}
