import React from 'react'
import ImgplateList from '../ImgplateList'
import Imgplates from '../img_loader_game'

function Game() {
  return (
    <>
    <div id="container">
      <ImgplateList imgplates = {Imgplates} />
    </div>
    </>
  )
}

export default Game
