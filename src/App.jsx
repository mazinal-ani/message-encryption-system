import { useState } from 'react'
import './index.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="title">Message Encryption System</h1>
      {/*<div className="card">
        <form onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </form>
      </div>*/}
    </div>
  )
}

export default App
