import React, { memo } from 'react'
import './todo.css'
import AllItems from '../AllItems/all-item'
import AddItem from '../Add-item/add-item'
import FiltersBlock from '../FiltersBlock/filters-block'
import { Link } from "react-router-dom"
import { TranslateTexts } from '../../constants'
import store from "../../config/store";
import {useSelector} from "react-redux"

const Todo = memo((props) => {
  const TranslatedTexts = TranslateTexts(useSelector(state => state.tasks.language))

  return (
    <div className={"toto-wrapper"}>
      <AddItem type={props.type} />
      <FiltersBlock/>
      <AllItems type={props.type} />
      {props.type === 'standard' ?
        <Link to={"/shopping-list"}>{TranslatedTexts.shoppingListTextLink}</Link>
        : <Link to={"/"}>{TranslatedTexts.todoTextLink}</Link>
      }
    </div>
  )
})

export default Todo;