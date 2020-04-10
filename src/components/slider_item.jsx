import React from 'react'
import '../style/slider.css'

function Slideritem({ sliderItem }) {
  return (
    <div className="slider__item">
      <div className="item__body">
        <div>
          <div className="img">
            <img src= {sliderItem.image} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slideritem
