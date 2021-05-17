import { useState } from 'react';
import NavLogin from './Components/NavLogin';
import {Switch, Route, NavLink } from 'react-router-dom';
import Login from './Components/auth/Login.js';
import Home from './Home';
import AboutMe from './AboutMe';
import './App.css';



function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <nav className = "NavBar">
          <ul>
            <li><NavLink to = "/" exact>Home</NavLink></li>
            <li><NavLink to = "/AboutMe">AboutMe</NavLink></li>
            <NavLogin > </NavLogin>
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
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </main>    

    </div>
  );
}

export default App;
