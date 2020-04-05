import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import '../style/imgplate.css';
function Imgplate(props) {
  const {plate} = props
  return (
    <>
    <div id="img1">
      <Link to='/'><img src= {plate.image} alt=" " /></Link> 
    </div>
    </>
  )
}

export default Imgplate
