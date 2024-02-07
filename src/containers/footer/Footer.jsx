import React, { useContext } from 'react'
import './Footer.css'
import { gameContext } from '../../context/gameContext'

const Footer = () => {
  const [state, dispatch] = useContext(gameContext);

  return (
    <footer>
      <button className="footer_btn" onClick={() => dispatch({type: "open_rules"})}>rules</button>
    </footer>
  )
}

export default Footer