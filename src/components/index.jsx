import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import {CSSTransition, TransitionGroup } from 'react-transition-group'
import '../style/index.css';
import Web from './pages/Web'
import Illustration from './pages/Illustration'
import Game from './pages/Game'
import About from './pages/About'

const routes = [
  { path: '/react', name: 'WEB', Component: Web },
  { path: '/Illustration', name: 'ILLUSTRATION', Component: Illustration },
  { path: '/Game', name: 'GAME', Component: Game },
  { path: '/About', name: 'ABOUT', Component: About },
]

function Menu() {
  return (
    <Router>
      <>
        <header>
          <div className="header">
              <div className="logo"><a href=" ">Кирилл Приваленков</a></div>
              <nav className="menu">
                  <ul className="menu-main">
                    {routes.map(route => (
                      <NavLink 
                        key={route.path}
                        as={NavLink}
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
        </header>
        {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
            {/* {({ match }) => (
                <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
                >
                </CSSTransition>
            )} */}
            
            <Component />
            </Route>
        ))}
      </>
    </Router>
  );
}

export default Menu;
