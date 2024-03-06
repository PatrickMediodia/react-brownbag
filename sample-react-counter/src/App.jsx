import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleSubtract = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <p>{count}</p>
      <div>
        <button onClick={handleSubtract}> - </button>
        <button onClick={handleAdd}> + </button>
      </div>
    </>
  )
}

export default App