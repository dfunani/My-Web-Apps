import { useState, useEffect } from 'react'

import './App.css'
import { Button, Row, Container, Col } from "react-bootstrap"
import Header from './components/Header'
import Intro from './components/Intro'
import Roll from './components/Roll'
import Game from './components/Game'

import Confetti from 'react-confetti'

function App() {
  
  const [btnNumbers, setBtnNumbers] = useState(
    [
    {btn: 1, clicked: false} ,
    {btn: 2, clicked: false} ,
    {btn: 3, clicked: false} ,
    {btn: 4, clicked: false} ,
    {btn: 5, clicked: false} ,
    {btn: 6, clicked: false} ,
    {btn: 7, clicked: false} ,
    {btn: 8, clicked: false} ,
    {btn: 9, clicked: false} ,
    {btn: 10, clicked: false}
    ]
  )
  const [gameState, setGameState] = useState(false)
  
  useEffect(() => {
    setGameState(() => {
      return btnNumbers.every((elem) => {
        if (elem.btn === btnNumbers[0].btn && elem.clicked)
        {
          return true
        }
        else
        {
          return false
          }
      })
    }
    )
  }, [btnNumbers])

  function handleRoll(event)
  {
    const x = btnNumbers.map((elem) => 
    {
      const result = !elem.clicked ? Math.floor((Math.random() * (11 - 1)) + 1) : elem.btn
      return {btn: result, clicked: elem.clicked}
    })

    setBtnNumbers(x)
  }

  function handleClick(event)
  {
    let prev = [...btnNumbers] 
    prev[event.target.dataset.id] = { btn: btnNumbers[event.target.dataset.id].btn, clicked: !btnNumbers[event.target.dataset.id].clicked }
    setBtnNumbers(prev)
  }

  return (
    <div className="App">
      {gameState && <Confetti />}
      <Header/>
      <Intro/>
      <Game buttons={btnNumbers} handleClick={ (event) => handleClick(event) } gameState={gameState} />
      <Roll roll={(event) => handleRoll(event)} gameState={gameState} />
    </div>

  )
}

export default App
