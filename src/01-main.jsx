import { StrictMode, React } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createElement } from 'react'


const h1 = createElement('h1', null, 'hello')
const ul = <div><ul><li>hello</li></ul></div>
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
)
