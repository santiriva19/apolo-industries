import './assets/App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home'
import Trefi from './components/Trefi'
import Extru from './components/Extru'

function App() 
{
  
    return (
      <div className="App">
        <Router>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/trefilado' component={Trefi}/>
          <Route exact path='/extrusion' component={Extru}/>
      </Router>
      </div>
    );
  

}
export default App;