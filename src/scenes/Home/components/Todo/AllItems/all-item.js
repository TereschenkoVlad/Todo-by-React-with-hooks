import React, { useState, useEffect } from 'react';
import './all-item.css';


const AllItems = (props) => {

    const [newValue, setValue] = useState('')
    const [user, setUser] = useState()

    useEffect(()=> {
         async function fetchUser ()  {
            const response = await fetch('https://api.randomuser.me/')
            const data = await response.json()
            const [userItem] = data.results
            setUser(userItem)
        }
        fetchUser()
    }, [props.items])

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

    let dragSrcEl = null
    const dragStart = (event) => {
        if (event.target.className === 'item') {
            event.target.style.opacity = '0.4'

            dragSrcEl = event.target;

            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('text/html', event.target.innerHTML);
        }
    }

    const dragOver = (event) => {
        if (event.preventDefault) {
            event.preventDefault();
        }
        event.dataTransfer.dropEffect = 'move';
        return false
    }

    const dragEnter = (event) => {
        if (event.target.className === 'item') {
            event.target.classList.add('over');
        }
    }

    const dragLeave = (event) => {
        event.target.classList.remove('over');
    }

    function drop (event) {
        if (event.target.className === 'item') {
            if (event.stopPropagation) {
                event.stopPropagation()
            }

            if (dragSrcEl !== event.target) {
                dragSrcEl.style.opacity = '1'
                dragSrcEl.innerHTML = event.target.innerHTML
                event.target.innerHTML = event.dataTransfer.getData('text/html')
            }

            event.target.classList.remove('over');
            return false
        }

    }

    const dragEnd = (event) => {
        if (event.target.className === 'item') {
            event.target.classList.remove('over');
        }
    }

    const renderItem = (item, index) => {
        return (
            <div key={index} className={'item'} draggable="true"
                 onDragStart={(e) => dragStart(e)} onDragOver={(e)=>{dragOver(e)}} onDragEnter={(e)=>{dragEnter(e)}}
                 onDragLeave={(e)=>{dragLeave(e)}} onDrop={(e) => {drop(e)}} onDragEnd={(e)=> {dragEnd(e)}}
            >
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
            <p>{(user) ? `${user.name.first} ${user.name.last}` : ''}</p>
        </div>
    );
}
export default AllItems;