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
                <div className="pan_com__item"><a href="https://t.me/PrivalenkovDesign"><img src={Tel} alt="telegram" /></a></div>
                <div className="pan_com__item"><a href="https://vk.com/privalenkovkirill"><img src={Vk} alt="vk" /></a></div>
                <div className="pan_com__item"><a href=" "><img src={Inst} alt="instagram" /></a></div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Panicons
