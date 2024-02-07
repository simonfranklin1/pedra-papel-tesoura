import React, { useContext } from 'react'
import './Game.css'
import { gameContext } from '../../context/gameContext.jsx'
import { Step1, Step2 } from '../../components'

const Game = () => {
  const [gameState] = useContext(gameContext);

  return (
    <main>
      {gameState.stage === "Start" && <Step1 />}
      {gameState.stage === "Playing" && <Step2 />}
    </main>
  )
}

export default Game