import React, { useContext } from 'react'
import '../style/imgplate.css';
import { Context } from '../context'

function Imgplate({ plate }) {
  const ctx = useContext(Context);
  function handleClick() {
    ctx.setIsOpen(true)
    ctx.setImages(plate.images)
  }
  return (
    
        <div className="imga" >
          <button onClick={() => handleClick()}><div className="bg-plate"><div className="title-plate">{plate.title}</div></div></button>
          <img src= {plate.image} alt= {plate.title}/>
        </div>
    
  )
}
export default Imgplate
