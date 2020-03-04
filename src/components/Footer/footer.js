import React, { useState, useEffect } from 'react'
import getPeople from './../../services/people'
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './footer.scss'

const Footer = () => {

  const [users, setUsers] = useState([])

  let getUsers = async () => {
    let usersList = await getPeople.getPeople()
    setUsers(usersList)
  }

  useEffect(() => {
    getUsers()
  }, [])

  let slickSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <footer>
      <h4>Users List:</h4>
      <div className="people-test-wrap">
        <Slider {...slickSettings}>
          {users.map((item, index) => {
            return (
              <div className={"user-item"} key={index + 1}>
                <p>{`Name: ${item.name}`}</p>
                <p>{`Skin color: ${item.skin_color}`}</p>
                <p>{`Mass: ${item.mass}`}</p>
              </div>
            )
          })}
        </Slider>
      </div>
    </footer>
  )
}

export default Footer