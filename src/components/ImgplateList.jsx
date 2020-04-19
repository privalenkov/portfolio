import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Imgplate from './Imgplate'

function ImgplateList({ imgplates }) {
    let timeout = 0;
    const plateElements = imgplates.map((plate, index) => 
        <TransitionGroup className="plate-container">
            <CSSTransition
                in={true}
                appear={true}
                timeout={timeout += 100}
                classNames="fade"
            >
                <Imgplate key= {index} plate = {plate}/>
            </CSSTransition>
        </TransitionGroup>
    )
    return (
        <>
        
            {plateElements}
            
        </>
    )
}

export default ImgplateList
