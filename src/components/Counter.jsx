import { useCounter } from '../hooks/useCounter'
import { useEffect } from 'react'

export function Counter() {
  const { count, handleIncrement, decreaseCount, isFavoriteNumber, isFavoriteNumber_Ari, showAlert } = useCounter()
  
  // Show alert when favorite number is reached
  useEffect(() => {
    if (showAlert) {
      // This could be replaced with a custom alert component
      // similar to the one in your image
      showFunFactAlert()
    }
  }, [showAlert])
  
  // Function to show a custom alert similar to the one in the image
  const showFunFactAlert = () => {
    // You could implement this with a state-based modal
    // For now, we'll use a simple div that appears when needed
    const alertDiv = document.createElement('div')
    alertDiv.style.position = 'fixed'
    alertDiv.style.top = '50%'
    alertDiv.style.left = '50%'
    alertDiv.style.transform = 'translate(-50%, -50%)'
    alertDiv.style.backgroundColor = '#f0f8ff'
    alertDiv.style.padding = '20px'
    alertDiv.style.borderRadius = '8px'
    alertDiv.style.border = '1px solid #1e90ff'
    alertDiv.style.zIndex = '1000'
    alertDiv.style.textAlign = 'center'
    
    alertDiv.innerHTML = `
      <h2 style="color: #0000FF; margin-bottom: 15px;">Fun Fact</h2>
      <p style="margin-bottom: 15px;">¡Esta es la fecha de mi cumpleaños!</p>
      <button id="closeAlertBtn" style="background-color: #1e90ff; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Cerrar</button>
    `
    
    document.body.appendChild(alertDiv)
    
    document.getElementById('closeAlertBtn').addEventListener('click', () => {
      document.body.removeChild(alertDiv)
    })
  }
  
  return (
    <div className="card">
      <p>count is {count}</p>
      
      <button className="buttons" onClick={handleIncrement}>
        +
      </button>
      
      <button className="buttons" onClick={decreaseCount}>
        -
      </button>
      
      {isFavoriteNumber && (
        <p style={{color: '#0000FF', fontWeight: 'bold'}}>
          ¡Esta es la fecha de mi cumpleaños by Criss!
        </p>
      )}

      {isFavoriteNumber_Ari && (
        <p style={{color: '#0000FF', fontWeight: 'bold'}}>
          ¡Este es mi numero favorito by Ari !
        </p>
      )}
      
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  )
}