import React, { useState } from 'react';
import './add-item.scss';
import { changeStateProp, pushStateProp } from '../../actions'

const AddItem = () => {

    // states
    const [item, setItem] = useState({
        isEdit: false,
        isChecked: false,
        value: '',
        id: Math.random()
    })

    const [isError, setError] = useState(false)

    const handleInput = (name, value) => {
        if (item.value) {
            setError(false)
        }
        setItem({
            ...item, [name]: value
        })
    }

    const onClickButton = () => {
        if (item.value) {
            handleInput('value', '');

            pushStateProp('tasks', item, 'TASKS')
            changeStateProp('title', item.value, 'TASKS')
        } else  {
            setError(true)
        }
    }

    return (
        <div className={'add-item'}>
            <div>
                <span>New item: </span>
                <input type="text" className={isError ? 'error' : ''} onChange={(event) => handleInput('value', event.target.value)} value={item.value}/>
            </div>
            <button className={'green-button'} onClick={onClickButton}>
                Add +
            </button>
        </div>

    );
}

export default AddItem;