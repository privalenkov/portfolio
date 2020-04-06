import React from 'react'
import {CSSTransition, TransitionGroup } from 'react-transition-group'
import ImgplateList from '../ImgplateList'
import Imgplates from '../fixtures'

function Game() {
  return (
    <>
      <ImgplateList imgplates = {Imgplates} />
    </>
  )
}

export default Game
