import React, { useState } from 'react';
import './add-item.scss'
import { pushStateProp } from '../../actions'

const AddItem = (props) => {

  // states
  const itemObj = props.type === 'standard' ? {
    isEdit: false,
    isChecked: false,
    value: '',
    id: Math.random()
  } : {
    isEdit: false,
    isChecked: false,
    value: '',
    price: NaN,
    id: Math.random()
  }

  const [item, setItem] = useState(itemObj)
  const [isError, setError] = useState(false)

  const handleInput = (name, value) => {
    if (item.value) {
      setError(false)
    }
    setItem({
      ...item, [name]: value
    })
  }

  const handleInputPrice = (name, value) => {

    if (item.value  && item.price) {
      setError(false)
    }

    setItem({
      isEdit: false,
      isChecked: false,
      value: '',
      id: Math.random(),
      [name]: value
    })
  }

  const onClickButton = () => {
    if (item.value && item.price && props.type !== 'standard') {
      handleInputPrice('price', '')
      pushStateProp('shoppingList', item, 'TASKS')
    } else if (item.value && !item.price && props.type === 'standard') {
      pushStateProp('tasks', item, 'TASKS')
      handleInput('value', '')
    } else {
      setError(true)
    }
  }

  return (
    <div className={'add-item'}>
      <div className={props.type === 'standard' ? "standard" : "shopping-list-new"}>
        <span>New item: </span>
        {props.type !== 'standard'
          ?
          <>
            <input type="text" className={isError ? 'error' : ''}
                   onChange={(event) => handleInput('value', event.target.value)} value={item.value}
                   placeholder={"Name"} />
            <input type="number" className={`${isError ? 'price-input error' : 'price-input'}`} placeholder={"Price"} value={!isNaN(item.price) ? item.price : ''} onChange={(event) => handleInput('price', event.target.value)} />
          </>
          :
          <input type="text" className={isError ? 'error' : ''}
                 onChange={(event) => handleInput('value', event.target.value)} value={item.value}/>
        }
      </div>
      <button className={'green-button'} onClick={onClickButton}>
        Add +
      </button>
    </div>

  );
}

export default AddItem;