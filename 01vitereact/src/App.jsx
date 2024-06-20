import Chai from "./chai"


function App() {
  const username = "Siddharth"

  return (  // can return only 1 element, wrapping it in a fragment
  // only evaluated expression can be injected not whole expression like if-else
    <>      
      <Chai/>
      <h1>Chai aur react {username}</h1>  
      <p>Test para</p>
    </>
    
  )
}

export default App
