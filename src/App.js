import About from './Component.js/About';
import News from './Component.js/News';
import Nav from './Component.js/Nav';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <Router>

      <div className="App">
        <Nav />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" exact component={News} />

        </Switch>
      </div>

    </Router>
  );
}

const Home = () => {

  return (
    <div>
      <h1>We are the Software Engineers on the making.
        <br />Just have patient with us and help us grow
        <br /> by contributing to our project.</h1>
    </div>
  )
};
export default App;