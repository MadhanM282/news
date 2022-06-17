import './App.css'
import { Home } from './components/homepage'
import { Landing } from './components/mainLanding';
import { ButtonAppBar } from './components/nav';

function App() {
  function changeBackground(e) {
    e.target.style.background = 'red';
  }
  function changeBack(e) {
    e.target.style.background = 'blue';
  }

  return (
    <div className="App">
      <ButtonAppBar/>
      <Landing/>
      
      {/* <Home/> */}
    </div>
  )
}
export default App
