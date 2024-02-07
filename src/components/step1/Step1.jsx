import React, { useContext } from 'react';
import Rock from '../../assets/icon-rock.svg';
import Paper from '../../assets/icon-paper.svg';
import Scissors from '../../assets/icon-scissors.svg';
import {gameContext} from '../../context/gameContext'

import './Step1.css'

const Step1 = () => {
  const [state, dispatch] = useContext(gameContext);

  const handleOption = (e) => {
    dispatch({
      type: "play",
      player: e.target.value
    })
  }

  return (
    <div className="game_selection-container">
      <div className="game_selection-container_upper-btns">
        <button className="game_selection-container_button paper_btn" value={"Paper"} onClick={handleOption}>
          <img src={Paper} alt="paper" />
        </button>
        <button className="game_selection-container_button scissors_btn" value={"Scissors"} onClick={handleOption}>
          <img src={Scissors} alt="scissors" />
        </button>
      </div>
      <div className="game_selection-container_lower-btns">
        <button className="game_selection-container_button rock_btn" value={"Rock"} onClick={handleOption}>
          <img src={Rock} alt="rock" />
        </button>
      </div>
    </div>
  )
}

export default Step1