import React, {useState} from 'react';
import './all-item.scss';
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import store from "../../config/store";
import {spliceStateProp, saveEditedStateProp} from '../../actions'

const AllItems = (props) => {

  const [newValue, setValue] = useState('')
  const [newPrice, setPrice] = useState(0)
  const [isActiveModuleItemMenu, setIsActiveModuleItemMenu] = useState(false)

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
    allItems.find((element, i) => {
      if (i === index) {
        element.isEdit = !element.isEdit
        setValue(item.value)
        if (newValue && props.type === 'standard') {
          saveEditedStateProp('tasks', newValue, index, 'value', 'TASKS')
        } else {
          saveEditedStateProp('shoppingList', newValue, index, 'value', 'TASKS')
        }

        if (newPrice) {
          saveEditedStateProp('shoppingList', newPrice, index, 'price', 'TASKS')
        }
      }
    })
  }

  const checkedItem = (item, index) => {
    allItems.find((i, ind) => {
      if (ind === index) {

        if (props.type === 'standard') {
          saveEditedStateProp('tasks', !item.isChecked, index, 'isChecked', 'TASKS')
        } else  {
          saveEditedStateProp('shoppingList', !item.isChecked, index, 'isChecked', 'TASKS')
        }
      }
    })
  }

  const itemMenuClick = () => {
    setIsActiveModuleItemMenu(!isActiveModuleItemMenu)
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
              <p className={"price"}>{item.price + ' грн.'}</p>: null} </>
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
                  <span className={"menu-item"} onClick={itemMenuClick}><FontAwesomeIcon icon={faEllipsisV}/></span>
                  {isActiveModuleItemMenu &&  <div className={"modal-menu-cont"}>
                    {renderMenuItems(item, index)}
                  </div> }
                </>
            }
          </>
          : <button className="save" onClick={() => handleEdit(item, index, newValue)}>Save</button>
        }
      </div>
    )
  }

  return (
    <div className={`items-container  ${props.type !== 'standard' ? 'shopping-list' : ''}`}>
      {allItems && allItems.map((item, index) => {
        switch (filterType) {
          case 'Active':
            if (!item.isChecked) return renderItem(item, index)
            break
          case 'Completed':
            if (item.isChecked) return renderItem(item, index)
            break
          default:
            return renderItem(item, index)
        }
      })}

    </div>
  );
}
export default AllItems;