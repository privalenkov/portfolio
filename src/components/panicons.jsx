import React from 'react'
import '../style/pan_icons.css';
import Vk from '../images/vk.svg'
import Inst from '../images/instagram.svg'
import Tel from '../images/telegram.svg'

function Panicons() {
  return (
    <>
    <div className="pan_com_v">
        <div className="pan_com_h">
            <div className="pan_com__body">
                <div className="pan_com__item"><img src={Tel} alt="telegram" /></div>
                <div className="pan_com__item"><img src={Vk} alt="vk" /></div>
                <div className="pan_com__item"><img src={Inst} alt="instagram" /></div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Panicons
