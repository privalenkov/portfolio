import React from 'react'
import {CSSTransition, TransitionGroup } from 'react-transition-group'
import Photo_about from '../../images/Photo_about.svg'
import '../../style/photo_about.css'

function About() {
  return (
    <>
      <div id="container-about">
        <div id="profile_img"><a href="https://vk.com/privalenkovkirill"><img src={Photo_about} alt="профиль"/></a></div>
        <div className="profile_name">Приваленков Кирилл</div>
        <div className="profile_text">
          <p>Я молодой дизайнер, который&nbsp;старается разрабатывать только годный дизайн. 
              Сделаю все бесплатно, чтобы&nbsp;обзавестись хорошим портфолио.</p>
        </div>
      </div>
    
    </>
  )
}

export default About
