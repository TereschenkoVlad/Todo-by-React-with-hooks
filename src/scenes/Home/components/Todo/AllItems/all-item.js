import React, { useState } from 'react';
import './all-item.css';

const AllItems = (props) => {

    const [newValue, setValue] = useState('')

    const deleteItem = (index) => {
        let elements = props.items
        elements.splice(index, 1)
        props.setItems([
            ...elements
        ])
    }

    const handleEdit = (item, index, newValue) => {
        let elements = props.items
        elements.find((element, i) => {
          if (i === index) {
              element.isEdit = !element.isEdit
              setValue(item.value)
              if (newValue) {
                  element.value = newValue
              }
          }
        })
        props.setItems([
            ...elements
        ])
    }

    const checkedItem = (item, index) => {
        let items = props.items
        items.find((i, ind) => {
            if (ind === index) {
                i.isChecked = !item.isChecked
            }
        })
        props.setItems([
            ...items
        ])
    }

    const renderItem = (item, index) => {
        return (
            <div key={index} className={'item'}>
                <div className={'item-left-cont'}>
                    <span className={item.isChecked ? 'number checked' : 'number'}>{index+1}</span>
                    {!item.isEdit
                        ? <p className={item.isChecked ? 'checked' : ''}>{item.value}</p>
                        : <input type="text" value={newValue}  onChange={(event) => setValue(event.target.value)} />
                    }
                </div>
                {!item.isEdit
                    ? <div>
                        {item.isChecked
                            ? <div>
                                <span className="remove-item" onClick={() => deleteItem(index)}>X</span>
                                <input type="checkbox" onClick={() => checkedItem(item, index)}/>
                            </div>
                            : <div>
                                <span className={'edit'} onClick={() => handleEdit(item, index)}>edit</span>
                                <span className="remove-item" onClick={() => deleteItem(index)}>X</span>
                                <input type="checkbox" onClick={() => checkedItem(item, index)}/>
                            </div>
                        }
                    </div>
                    : <button className="save" onClick={() => handleEdit(item, index, newValue)}>Save</button>
                }
            </div>
        )
    }

    return (
        <div className={'items-container'}>
            {props.items.map((item, index) => renderItem(item, index)
            )}
        </div>
    );
}

export default AllItems;