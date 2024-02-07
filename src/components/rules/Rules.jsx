import React, { useContext } from 'react';
import './Rules.css';
import GameRules from '../../assets/image-rules.svg';
import IconClose from '../../assets/icon-close.svg';
import { gameContext } from '../../context/gameContext';

const Rules = () => {
    const [state, dispatch] = useContext(gameContext);


  return (
    <div className={`game_rules ${state.rules === true ? 'game_rules-open' : ''}`}>
        <h2 className='game__rules-title'>Rules</h2>
        <img src={GameRules} alt="rules" />
        <button className="close_rules" onClick={() => dispatch({type: "close_rules"})}>
            <img src={IconClose} alt="close" />
        </button>
    </div>
  )
}

export default Rules