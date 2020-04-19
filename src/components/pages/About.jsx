import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import photoAbout from '../../images/photoAbout.svg'
import '../../style/photo_about.css'

function About() {
  return (
    <>
      <TransitionGroup className="about-container">
        <CSSTransition
            in={true}
            appear={true}
            timeout={100}
            classNames="aboutfade"
        >
        <div id="container-about">
          <div id="profile_img"><a href="https://vk.com/privalenkovkirill"  rel = "noopener noreferrer" target="_blank"><img src={photoAbout} alt="профиль"/></a></div>     
          <div className="profile_name">Приваленков Кирилл</div>
          <div className="profile_text">
            <p>Я молодой дизайнер, который&nbsp;старается разрабатывать только годный дизайн. 
                Сделаю все бесплатно, чтобы&nbsp;обзавестись хорошим портфолио.</p>
          </div>
        </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  )
}

export default About
