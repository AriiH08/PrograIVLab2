import { useState } from 'react'

export function useCounter() {

    const [count, setCount] = useState(0)
      const dicreaseCount = () => {
        if (count > 0) {
          setCount((count) => count - 1)
        }
      }
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

    return { count, handleIncrement, dicreaseCount }
  }

  