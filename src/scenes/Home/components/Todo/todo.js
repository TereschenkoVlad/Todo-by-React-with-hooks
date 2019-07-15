import React, { useState } from 'react';
import './todo.css';
import AddItem from "./Add-item/add-item";
import AllItems from "./AllItems/all-item";

const Todo = (props) => {
    const [items, setItems] = useState([])

    return (
        <div>
            <AddItem items={items} setItems={setItems} />
            <AllItems items={items} setItems={setItems} />
        </div>
    )
}

export default Todo;