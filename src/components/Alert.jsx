import { useEffect } from 'react'
import './Alert.css'

function Alert({ message, onClose }) {
  useEffect(() => {
    // Añadir clase para evitar scroll mientras la alerta esté visible
    document.body.style.overflow = 'hidden'
    
    return () => {
      // Restaurar scroll cuando el componente se desmonte
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div className="custom-alert">
      <div className="alert-title">Fun Fact</div>
      <div className="alert-message">{message}</div>
      <button className="alert-button" onClick={onClose}>
        Cerrar
      </button>
    </div>
  )
}

export default Alert