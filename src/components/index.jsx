import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import '../style/index.css';
import Web from './pages/Web'
import Illustration from './pages/Illustration'
import Game from './pages/Game'
import About from './pages/About'

const routes = [
  { path: '/portfolio', name: 'WEB', Component: Web },
  { path: '/Illustration', name: 'ILLUSTRATION', Component: Illustration },
  { path: '/Game', name: 'GAME', Component: Game },
  { path: '/About', name: 'ABOUT', Component: About },
]

function Menu() {
  function hm() {
    document.querySelector('.menu').classList.toggle("menu-close");
    document.querySelector('.header').classList.toggle("header-close");
    document.querySelector('.hamburder-menu-container').classList.toggle("hamburder-menu-container-close");
    document.querySelector('.logo').classList.toggle("logo-close");
    
  }
  return (
    <Router>
      <>
        <header>
          <div className="header">
            <button onClick={() => hm()} className="hamburger-menu">
              <span className="menu-item"></span>
              <span className="menu-item"></span>
              <span className="menu-item"></span>
            </button>
            <div className="hamburder-menu-container">
              <div className="logo"><a href="https://vk.com/privalenkovkirill">Кирилл Приваленков</a></div>
              <nav className="menu">
              <ul className="menu-main">
                {routes.map(route => (
                  <NavLink 
                    key={route.path}
                    to={route.path}
                    activeClassName="current"
                    exact
                  >
                    {route.name}
                  </NavLink >
                ))}
              </ul>
            </nav>
            </div>
            
            
          </div>
        </header>
        {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              <Component />
            </Route>
        ))}
      </>
    </Router>
  );
}

export default Menu;
