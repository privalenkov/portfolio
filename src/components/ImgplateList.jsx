import React from 'react'
import Imgplate from './Imgplate'

function ImgplateList({ imgplates }) {
    // const plateElements = imgplates.map((plate, index) =>
    //     <Imgplate key= {index} plate = {plate}/>
    // )
    return (
        <>
            {imgplates.map((plate, index) =>
            
                <Imgplate key= {index} plate = {plate}/>
                
            )}
        </>
    )
}

export default ImgplateList
