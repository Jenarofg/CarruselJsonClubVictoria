import './App.css'
import Carouselcopy from './components/Carouselcopy'
import {cadete} from "./data/cadetepartidos.json"

function App() {
 
  return (
    <div className='App'>
      <Carouselcopy data2={cadete} />
    </div>
  )
}

export default App
 