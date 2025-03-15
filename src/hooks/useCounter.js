import { useState, useEffect } from 'react'

export function useCounter() {
  // Load count from localStorage on initial render
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('counterValue')
    return savedCount ? parseInt(savedCount) : 0
  })
  
  // The favorite number value
  const favoriteNumber = 24
  const favoriteNumber_Ari = 50
  
  // Check if count equals favorite number
  const isFavoriteNumber = count === favoriteNumber
  const isFavoriteNumber_Ari = count === favoriteNumber_Ari
  // Save count to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('counterValue', count.toString())
  }, [count])
  
  const handleIncrement = () => {
    const newCount = count + 1
    setCount(newCount)
  }
  
  const decreaseCount = () => {
    if (count > 0) {
      setCount((count) => count - 1)
    }
  }
  
  // New function to show alert when favorite number is reached
  const showAlert = isFavoriteNumber
 
  
  return { count, handleIncrement, decreaseCount, isFavoriteNumber, isFavoriteNumber_Ari, showAlert }
}