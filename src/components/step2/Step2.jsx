import { useContext, useEffect, useState } from 'react'
import { gameContext } from '../../context/gameContext'
import Rock from '../../assets/icon-rock.svg';
import Paper from '../../assets/icon-paper.svg';
import Scissors from '../../assets/icon-scissors.svg';
import './Step2.css'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Step2 = () => {
  const [state, dispatch] = useContext(gameContext);

  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.waiting').style.display = 'none';
      document.querySelector('.player2-option').classList.remove('hidden');
      document.querySelector('.game_result-container-mobile').classList.remove('opacity_0');
      document.querySelector('.game_result-container-desktop').classList.remove('opacity_0');

      state.result === "win" ? dispatch({type: "update_score"}) : "";
    }, 1000)
  }, [])

  return (
    <div className="game_step2">
      <div className="game_playing-container">
        <div className="game_playing-container_player">
          <p className="player1-title">You Picked</p>
          <div className="player1-option">
            {state.player === "Paper" && (
              <div className="game_selection-container_button paper_btn">
                <img src={Paper} alt="paper" />
              </div>
            )}
            {state.player === "Rock" && (
              <div className="game_selection-container_button rock_btn">
                <img src={Rock} alt="rock" />
              </div>
            )}
            {state.player === "Scissors" && (
              <div className="game_selection-container_button scissors_btn">
                <img src={Scissors} alt="scissors" />
              </div>
            )}
          </div>
        </div>
        <div className="game_result-container-desktop opacity_0">
        <div className="game_result">
          {state.result === "win" && <h2>you win</h2>}
          {state.result === "lose" && <h2>you lose</h2>}
          {state.result === "tie" && <h2>tie</h2>}
        </div>
        <button className="game_restart-btn" onClick={() => dispatch({type: "restart"})}>
          play again
        </button>
      </div>
        <div className="game_playing-container_player">
        <p className="player2-title">The house picked</p>
        <div className="waiting">
              <AiOutlineLoading3Quarters className='waiting-icon' />
        </div>
        <div className="player2-option hidden">
              {state.home === "Paper" && (
                <div className="game_selection-container_button paper_btn">
                  <img src={Paper} alt="paper" />
                </div>
              )}
              {state.home === "Rock" && (
                <div className="game_selection-container_button rock_btn">
                  <img src={Rock} alt="rock" />
                </div>
              )}
              {state.home === "Scissors" && (
                <div className="game_selection-container_button scissors_btn">
                  <img src={Scissors} alt="scissors" />
                </div>
              )}
        </div>
        </div>
      </div>
      <div className="game_result-container-mobile opacity_0">
        <div className="game_result">
          {state.result === "win" && <h2>you win</h2>}
          {state.result === "lose" && <h2>you lose</h2>}
          {state.result === "tie" && <h2>tie</h2>}
        </div>
        <button className="game_restart-btn" onClick={() => dispatch({type: "restart"})}>
          play again
        </button>
      </div>
    </div>
  )
}

export default Step2