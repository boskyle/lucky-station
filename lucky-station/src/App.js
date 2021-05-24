import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './routes/Home/Home';
import './App.scss';


function App() {
  return (

  <Router>
    <div className="App">
      <div className="containerFluid bg-info">
      <Switch>
      <Route exact path='/'component={Home}></Route>
      </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;
