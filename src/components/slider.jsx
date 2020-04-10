import React, { useContext } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import '../style/slider.css'
import {Context} from '../context'
import Slick from "react-slick";
import SliderItem from './slider_item'

function Slider({ SliderItemLoader }) {
  const ctx = useContext(Context);
  
  return (
        <div id="view_img_container">
          <div id="view_img__bg" onClick={() => ctx.setIsOpen(false)}></div>
          
                <div className="slider">
                    <div className="slider_navigation"></div>
                    <TransitionGroup className="slider-plate-container">
                      <CSSTransition
                          in={true}
                          appear={true}
                          timeout={100}
                          classNames="fadeimg"
                      >
                      <div>
                      <Slick  
                        className="sliderbody"
                        arrows={false}
                        slidesToShow={1}
                        slidesToScroll={1}
                        dots={true}
                        autoplay={false}
                        infinite={true}
                        speed={500}
                        fade={true}
                        cssEase={'linear'}
                        appendDots= {dots =>(<div>{dots}</div>)}
                      >
                        {SliderItemLoader.map((sliderItem, index) =>
                            <SliderItem key= {index} sliderItem = {sliderItem}/>
                        )}
                      </Slick>
                      </div>
                      </CSSTransition>
                    </TransitionGroup>
                </div>
            
        </div>
  )
}

export default Slider
