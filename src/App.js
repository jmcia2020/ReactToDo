import './App.css';
import {Switch, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className = "NavBar">
          <ul>
            <li><NavLink to = "/" exact>Home</NavLink></li>
            <li><NavLink to = "/AboutMe">AboutMe</NavLink></li>
          </ul>
        </nav>

      </header>
      
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/AboutMe">
            <AboutMe />
          </Route>
        </Switch>
      </main>    

    </div>
  );
}

export default App;
