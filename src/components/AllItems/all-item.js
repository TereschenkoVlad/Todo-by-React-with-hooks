import React, {useEffect, useState} from 'react'
import './all-item.scss'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { spliceStateProp, saveEditedStateProp } from '../../actions'
import getCourses from '../../services/course'
import { TranslateTexts } from "../../constants";

const AllItems = (props) => {

  const TranslatedTexts = TranslateTexts(useSelector((state) => state.tasks.language))
  const [newValue, setValue] = useState('')
  const [newPrice, setPrice] = useState(0)
  const [courses, setCourses] = useState([])
  const [selCourse, setSelCourse] = useState('UAH')
  const [isActiveModuleItemMenu, setIsActiveModuleItemMenu] = useState({isActive: false, index: NaN})

  let getCoursesList = async () => {
    let coursesList = await getCourses()
    coursesList.unshift({
      ccy: 'UAH',
      base_ccy: 'UAH',
      buy: '1',
      sale: '1'
    })
    setCourses(coursesList)
  }

  useEffect(() => {
    if (props.type !== 'standard') {
      getCoursesList()
    }
  }, [props.type])

  let storePathCall = props.type === 'standard' ? state => state.tasks.tasks
    : state => state.tasks.shoppingList
  const allItems = useSelector(storePathCall)
  const filterType = useSelector(state => state.tasks.filterType)

  const deleteItem = (index) => {
    if (props.type === 'standard') {
      spliceStateProp('tasks', index, 'TASKS')
    } else {
      spliceStateProp('shoppingList', index, 'TASKS')
    }
  }

  const handleEdit = (item, index, newValue) => {
    allItems.forEach((element, i) => {
      if (i === index) {
        element.isEdit = !element.isEdit
        setValue(item.value)
        setPrice(item.price)
        if (newValue && props.type === 'standard') {
          saveEditedStateProp('tasks', newValue, index, 'value', 'TASKS')
        } else if (newValue && props.type !== 'standard') {
          saveEditedStateProp('shoppingList', newValue, index, 'value', 'TASKS')
        }

        if (newPrice) {
          saveEditedStateProp('shoppingList', newPrice, index, 'price', 'TASKS')
        }
      }
    })
  }

  const checkedItem = (item, index) => {
    allItems.forEach((i, ind) => {
      if (ind === index) {

        if (props.type === 'standard') {
          saveEditedStateProp('tasks', !item.isChecked, index, 'isChecked', 'TASKS')
        } else  {
          saveEditedStateProp('shoppingList', !item.isChecked, index, 'isChecked', 'TASKS')
        }
      }
    })
  }

  const itemMenuClick = (index) => {
    setIsActiveModuleItemMenu({isActive: !isActiveModuleItemMenu.isActive, index: index})
  }

  const totalPrice = (course = 'UAH') => {
    let totalResult = 0
    allItems.forEach((item) => {
      let itemPrice = item.price ? item.price : 0
      switch (filterType) {
        case 'Active':
          if (!item.isChecked) {
            totalResult += parseFloat(itemPrice)
          }
          break
        case 'Completed':
          if (item.isChecked) {
            totalResult += parseFloat(itemPrice)
          }
          break
        default:
          totalResult += parseFloat(itemPrice)
      }
    })

    if (courses.length && course) {
      let equal = parseFloat(courses.find((item) => item.ccy === course).buy)
      totalResult = (totalResult / equal).toFixed(2)

      if (course !== selCourse) {
        setSelCourse(course)
      }
    }

    return totalResult
  }

  const renderMenuItems = (item, index) => {
    return (
      <div className={"icon-cont"}>
                  <span className={'edit'} onClick={() => handleEdit(item, index)}>
                    <FontAwesomeIcon icon={faEdit}/>
                  </span>
        <span className="remove-item" onClick={() => deleteItem(index)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </span>
        <div className="switch">
          <input type="checkbox" defaultChecked={item.isChecked}
                 onClick={() => checkedItem(item, index)} id={"isCompleted-" + index} className={"switch-input"} />
          <label htmlFor={"isCompleted-" + index} className="switch-label">Switch</label>
        </div>
      </div>
    )
  }

  const renderItem = (item, index) => {
    return (
      <div key={index} className={'item'}>
        <div className={'item-left-cont'}>
          <span className={item.isChecked ? 'number checked' : 'number'}>{index + 1}</span>
          {!item.isEdit
            ? <><p className={item.isChecked ? 'checked' : ''}>{item.value}</p> {props.type !== 'standard' ?
              <p className={"price"}>{`${(item.price ? item.price : 0) + ' грн.'}`}</p>: null} </>
            : <><input type="text" value={newValue} onChange={(event) => setValue(event.target.value)} /> {props.type !== 'standard' ?
              <input type="number" className={"edit-price"} value={newPrice} onChange={(event) => setPrice(event.target.value)} /> : null} </>
          }
        </div>
        {!item.isEdit
          ? <>
            {item.isChecked
              ? <div className={"icon-cont-small"}>
                <span className="remove-item" onClick={() => deleteItem(index)}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </span>
                <div className="switch">
                  <input type="checkbox" defaultChecked={item.isChecked}
                         onClick={() => checkedItem(item, index)} id={"isCompleted-" + index} className={"switch-input"} />
                  <label htmlFor={"isCompleted-" + index} className="switch-label">Switch</label>
                </div>
              </div>
              : window.innerWidth > 540 ?
                <>
                  {renderMenuItems(item, index)}
                </>
                : <>
                  <span className={"menu-item"} onClick={() => itemMenuClick(index)}><FontAwesomeIcon icon={faEllipsisV}/></span>
                  {(isActiveModuleItemMenu.isActive && isActiveModuleItemMenu.index === index) &&  <div className={"modal-menu-cont"}>
                    {renderMenuItems(item, index)}
                  </div> }
                </>
            }
          </>
          : <button className="save" onClick={() => handleEdit(item, index, newValue)}>{TranslatedTexts.saveItemBtn}</button>
        }
      </div>
    )
  }

  return (
    <div className={`items-container  ${props.type !== 'standard' ? 'shopping-list' : ''}`}>
      {allItems && allItems.map((item, index) => {
        switch (filterType) {
          case 'Active':
            if (!item.isChecked) {
              return renderItem(item, index)
            } else {
              return null
            }
          case 'Completed':
            if (item.isChecked) {
              return renderItem(item, index)
            }  else { return null }
          default:
            return renderItem(item, index)
        }
      })}
      {props.type !== 'standard' &&
      <div className="total-result">
        <span className={"total-price-label"}>{TranslatedTexts.totalPriceLabel}:</span>
        <span className={"total-price-number"}>{`${totalPrice(selCourse)}`}</span>
        <select className="courses-money" onChange={(event) => totalPrice(event.target.value)}>
          {courses.map((item, index) => {
            return (
              <option key={index + 1} value={item.ccy}>
                {item.ccy}
              </option>
            )
          })}
        </select>
      </div>
      }
    </div>
  )
}
export default AllItems;