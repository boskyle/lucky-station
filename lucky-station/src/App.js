import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './routes/Home/Home';
import About from './routes/About/About';
import Blog from './routes/Blog/BlogContainer';
import './App.scss';
import {NavbarProvider} from './components/Navbar/NavbarContext';


function App() {
  return (

  <Router>
    <NavbarProvider>
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Switch>
      <Route exact path='/'component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/blog" component={Blog}></Route>
      </Switch>
    </div>
    </NavbarProvider>
  </Router>
  );
}

export default App;
