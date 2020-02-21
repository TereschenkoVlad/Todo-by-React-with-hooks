import React, {useState} from 'react';
import './add-item.scss';
import {changeStateProp, pushStateProp} from '../../actions'

const AddItem = (props) => {

  // states
  let itemObj = props.type === 'standard' ? {
    isEdit: false,
    isChecked: false,
    value: '',
    id: Math.random()
  } : {
    isEdit: false,
    isChecked: false,
    value: '',
    price: 0,
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
    if (props.type !== 'standard') {
      if (item.price) {
        setError(false)
      }

      setItem({
        ...item, [name]: value
      })
    }
  }

  const onClickButton = () => {
    if (item.value) {
      handleInput('value', '');

      if (props.type === 'standard') {
        pushStateProp('tasks', item, 'TASKS')
      } else  {
        handleInputPrice('price', '')
        pushStateProp('shoppingList', item, 'TASKS')
      }

    } else {
      setError(true)
    }
  }

  return (
    <div className={'add-item'}>
      <div className={props.type === 'standard' ? "standard" : "shopping-list"}>
        <span>New item: </span>
        {props.type !== 'standard'
          ?
          <>
            <input type="text" className={isError ? 'error' : ''}
                   onChange={(event) => handleInput('value', event.target.value)} value={item.value}
                   placeholder={"Name"} />
            <input type="number" className={"price-input"} placeholder={"Price"} onChange={(event) => handleInputPrice('price', event.target.value)} />
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