import React from 'react'
import { useSelector } from 'react-redux'
import './filter-link.scss'
import { changeStateProp } from '../../actions/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons'

const FilterLink = (props) => {
    const filterType = useSelector(state => state.tasks.filterType)
    const isChecked = filterType === props.buttonType

    const checkPoint = () => {
        changeStateProp('filterType', props.buttonType, 'TASKS')
    }

    return (
        <div className={"filter-button"}>
            <input onChange={checkPoint} checked={isChecked} type="radio" className="filter-point" id={props.buttonType}/>
            <label htmlFor={props.buttonType} className={isChecked ? "filter-item-label active" : "filter-item-label"}><FontAwesomeIcon icon={faDotCircle}/>{props.buttonType}</label>
        </div>
    )
}

export default FilterLink