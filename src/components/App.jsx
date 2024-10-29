import { useState } from 'react'
import CandyBar from './CandyBar.jsx'

function App() {

  // let clicks = 0

  const [clicks, setClicks] = useState(0)
  const [candyBars, setCandyBars] = useState( ['100 Grand', 'Almond Joy', 'Snickers', 'Reeses Fast Break', 'Milky Way', 'Cookies and Cream Hershey Bar'])
  const mappedCandy = candyBars.map(bar => <CandyBar key={bar} candy={bar}/>)

  function handleClick() {
    setClicks(clicks + 1)
  }

  function handleAddNewReeses() {
    setCandyBars([...candyBars, 'Reeses'])
  }

  function handleReset() {
    setClicks(0)
  }

  return (
    <div className="App">

      <h1>React State and Events</h1>

      <button onClick={handleClick}> You have clicked me {clicks} times </button>
      <button onClick={handleAddNewReeses}> Add new Reese's </button>
      <button onClick={handleReset}> Reset clicks </button>
      { mappedCandy }

    </div>
  )
}

export default App
