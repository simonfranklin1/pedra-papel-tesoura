import React, { useContext } from 'react';
import './Header.css';
import {gameContext} from '../../context/gameContext'

const Header = () => {
  const [state] = useContext(gameContext)

  return (
    <header>
      <div className="header_content">
        <div className="header_content-title">
          <p>Rock</p>
          <p>Paper</p>
          <p>Scissors</p>
        </div>

        <div className="header_content-score_container">
          <p className='header_content-score-title'>score</p>
          <h3 className="score">{state.score}</h3>
        </div>
      </div>
    </header>
  )
}

export default Header