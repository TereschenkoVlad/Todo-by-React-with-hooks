import React from 'react'
import { useSelector } from 'react-redux'
import './filter-link.scss'
import { changeStateProp } from '../../actions/'

const FilterLink = (props) => {
    const filterType = useSelector(state => state.tasks.filterType)
    const isChecked = filterType === props.buttonType

    const checkPoint = () => {
        changeStateProp('filterType', props.buttonType, 'TASKS')
    }

    return (

        <div className={"filter-button"}>
            <div className="switch">
                <input onChange={checkPoint} checked={isChecked} type="checkbox" className="switch-input filter-point" id={props.buttonType}/>
                <label htmlFor={props.buttonType} className="switch-label">Switch</label>
            </div>
            <span>{props.buttonType}</span>
        </div>

    )
}

export default FilterLink