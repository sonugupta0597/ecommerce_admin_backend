import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import  Home from './container/Home'
import  Signup from './container/Signup'
import  Signin from './container/Signin'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/Signin" component={Signin} />
      </Switch>
    </Router>

  );
}

export default App;
