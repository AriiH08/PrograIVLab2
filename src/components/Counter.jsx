import { useCounter } from '../hooks/useCounter'

export function Counter() {
    
    const { count, handleIncrement, dicreaseCount } = useCounter()

    return(
    <div className="card">
        <p>count is {count}</p>

          <button className='buttons' onClick={handleIncrement}>
            ➕
          </button>

          <button className='buttons' onClick={dicreaseCount}>
            ➖
          </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        
      </div>
    )
}