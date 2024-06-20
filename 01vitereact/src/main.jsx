import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){  // parsed into a html object
  return(
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

const anotherElement = (
  <a href = "https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "Sid"

const reactElement = React.createElement(
  'a',      //tag
  {href: 'https://google.com', target: '_blank'},  // attributes
  'click me to visit google',    // text
  anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <MyApp />
    anotherElement
    reactElement
  </React.StrictMode>,
)
