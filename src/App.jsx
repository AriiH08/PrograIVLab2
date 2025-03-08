import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Alert from './components/Alert'

function App() {
  const [count, setCount] = useState(0)
  const [showAlert, setShowAlert] = useState(false)

  const handleIncrement = () => {
    const newCount = count + 1
    setCount(newCount)
    
    // Mostrar alerta cuando el contador llegue a 24
    if (newCount === 24) {
      setShowAlert(true)
    }
  }

  const closeAlert = () => {
    setShowAlert(false)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleIncrement}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      {showAlert && (
        <Alert 
          message="¡Esta es la fecha de mi cumpleaños!" 
          onClose={closeAlert} 
        />
      )}
    </>
  )
}

export default App