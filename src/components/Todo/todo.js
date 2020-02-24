import React, { memo } from 'react'
import './todo.css'
import AllItems from '../AllItems/all-item'
import AddItem from '../Add-item/add-item'
import Footer from '../Footer/footer'
import { Link } from "react-router-dom"

const Todo = memo((props) => {

  return (
    <div className={"toto-wrapper"}>
      <AddItem type={props.type} />
      <Footer/>
      <AllItems type={props.type} />
      {props.type === 'standard' ?
        <Link to={"/shopping-list"}>Shopping List</Link>
        : <Link to={"/"}>ToDo List</Link>
      }
    </div>
  )
})

export default Todo;