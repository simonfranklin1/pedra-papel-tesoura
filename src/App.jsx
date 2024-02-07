import './App.css'
import { Rules } from './components'
import { Header, Game, Footer } from './containers/index'

function App() {

  return (
    <div className="App">
      <Rules />
      <Header></Header>
      <Game></Game>
      <Footer></Footer>
    </div>
  )
}

export default App
