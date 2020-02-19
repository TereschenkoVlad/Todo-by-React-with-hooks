import React, { useState, memo, useEffect } from 'react';
import { useSelector } from 'react-redux'
import './todo.css';
import AllItems from '../AllItems/all-item'
import AddItem from '../Add-item/add-item'

const Todo = memo(() => {
    const data = useSelector(state => state.tasks.tasks)
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(data)
    }, [])

    return (
        <div>
            <AddItem  setItems={setItems} />
            <AllItems setItems={setItems} />
        </div>
    )
})

export default Todo;