import React, { useState } from 'react'
import Index from './components/index'
import Panicons from './components/panicons'
import Slider from './components/slider'
import {Context} from './context'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [images, setImages] = useState() 
  return (
    <Context.Provider value={{images, setImages, isOpen, setIsOpen}}>
      <div className="App">
        {isOpen ? <Slider SliderItemLoader = {images}/> : null}
        <Panicons />
        <Index />
      </div>
    </Context.Provider>
  );
}

export default App;
