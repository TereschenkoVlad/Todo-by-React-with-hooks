import React, { useState } from 'react';
import './add-item.css';

const AddItem = (props) => {
    // states
    const [item, setItem] = useState({
        isEdit: false,
        isChecked: false,
        value: ''
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



    const onClickbutton = () => {
        if (item.value) {
            props.setItems([
                ...props.items, item
            ])
            handleInput('value', '')
        } else  {
            setError(true)
        }
    }

    return (
        <div className={'add-item'}>
            <div>
                <span>Add item: </span>
                <input type="text" className={isError ? 'error' : ''} onChange={(event) => handleInput('value', event.target.value)} value={item.value}/>
            </div>
            <button className={'green-button'} onClick={onClickbutton}>
                Add +
            </button>
        </div>

    );
}

export default AddItem;