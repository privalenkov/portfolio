import React from 'react'
import {CSSTransition, TransitionGroup } from 'react-transition-group'
import '../style/imgplate.css';

function Imgplate(props) {
  const {plate} = props
  return (
    <>
    
    <TransitionGroup className="plate-container">
      <CSSTransition
        appear={true}
        timeout={300}
        classNames="fade"
      >
        <div className="imga">
          <a href=" "><div className="bg-plate"><div className="title-plate">{plate.title}</div></div></a>
          <img src= {plate.image} alt= {plate.title}/>
        </div>
      </CSSTransition>
    </TransitionGroup>
    </>
    
  )
}

export default Imgplate
