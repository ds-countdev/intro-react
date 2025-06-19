import { StrictMode,  createElement} from 'react'
import { createRoot } from 'react-dom/client'
import {HelloWorldApp } from './HelloWorldApp'
import './index.css'

const h1 = createElement('h1', null, 'hello')
const ul = <div><ul><li>hello</li></ul></div>
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloWorldApp 
    title = 'hello world'
    user = {{name : 'diego', lastName : "solano"} } 
    id = {4}
    book = 'tiers'
    />
  </StrictMode>
  
)
