import React, {useState, useEffect} from 'react';
import './all-item.scss';
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import store from "../../config/store";
import {spliceStateProp, saveEditedStateProp} from '../../actions'

const AllItems = () => {

  const [newValue, setValue] = useState('')
  const [user, setUser] = useState()
  const allItems = useSelector(state => state.tasks.tasks)
  const filterType = useSelector(state => state.tasks.filterType)

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch('https://api.randomuser.me/')
      const data = await response.json()
      const [userItem] = data.results
      setUser(userItem)
    }

    fetchUser()
  }, [allItems.length])

  const deleteItem = (index) => {
    spliceStateProp('tasks', index, 'TASKS')
  }

  const handleEdit = (item, index, newValue) => {
    allItems.find((element, i) => {
      if (i === index) {
        element.isEdit = !element.isEdit
        setValue(item.value)
        if (newValue) {
          saveEditedStateProp('tasks', newValue, index, 'value', 'TASKS')
        }
      }
    })
  }

  const checkedItem = (item, index) => {
    allItems.find((i, ind) => {
      if (ind === index) {
        saveEditedStateProp('tasks', !item.isChecked, index, 'isChecked', 'TASKS')
      }
    })
  }

  const renderItem = (item, index) => {
    return (
      <div key={index} className={'item'}>
        <div className={'item-left-cont'}>
          <span className={item.isChecked ? 'number checked' : 'number'}>{index + 1}</span>
          {!item.isEdit
            ? <p className={item.isChecked ? 'checked' : ''}>{item.value}</p>
            : <input type="text" value={newValue} onChange={(event) => setValue(event.target.value)}/>
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
                  <input type="checkbox" defaultChecked={item.isChecked ? 'checked' : ''}
                         onClick={() => checkedItem(item, index)} id={"isCompleted-" + index} className={"switch-input"} />
                  <label htmlFor={"isCompleted-" + index} className="switch-label">Switch</label>
                </div>
              </div>
              : <div className={"icon-cont"}>
                <span className={'edit'} onClick={() => handleEdit(item, index)}>
                  <FontAwesomeIcon icon={faEdit}/>
                </span>
                <span className="remove-item" onClick={() => deleteItem(index)}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </span>
                <div className="switch">
                  <input type="checkbox" defaultChecked={item.isChecked ? 'checked' : ''}
                         onClick={() => checkedItem(item, index)} id={"isCompleted-" + index} className={"switch-input"} />
                  <label htmlFor={"isCompleted-" + index} className="switch-label">Switch</label>
                </div>
              </div>
            }
          </>
          : <button className="save" onClick={() => handleEdit(item, index, newValue)}>Save</button>
        }
      </div>
    )
  }

  return (
    <div className={'items-container'}>
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
      <p>{(user) ? `${user.name.first} ${user.name.last}` : ''}</p>
    </div>
  );
}
export default AllItems;