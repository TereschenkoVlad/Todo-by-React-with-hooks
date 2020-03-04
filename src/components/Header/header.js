import React from 'react'
import './header.scss'
import store from "../../config/store"
import { changeStateProp } from "../../actions"

const Header = (props) => {
  const changeLanguage = (event) => {
    if (event.target.tagName === 'LI') {
      changeStateProp('language', event.target.textContent, 'TASKS')
      if (!event.target.classList.contains('active')) {
        event.target.classList.add('active')
        let otherEl = event.target.previousElementSibling ? event.target.previousElementSibling : event.target.nextElementSibling
        otherEl.classList.remove('active')
      }
    }
  }

  return (
    <header>
      <h1>{props.name}</h1>
      <div className="language-switch">
        <ul onClick={(event) => changeLanguage(event)}>
          <li className={'active'}>EN</li>
          <li>UA</li>
        </ul>
      </div>
    </header>
  )
}

export default Header;