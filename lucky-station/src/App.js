import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home/Home';
import About from './routes/About/About';
import Blog from './routes/Blog/BlogContainer';
import './App.scss';


function App() {
  return (

  <Router>
    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path='/'component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/blog" component={Blog}></Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
