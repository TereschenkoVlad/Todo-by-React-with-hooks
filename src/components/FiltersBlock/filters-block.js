import React from 'react'
import FilterLink from '../FilterLink/filter-link'
import './filters-block.scss'

const FiltersBlock = () => {

    return (
        <div className={"filters-blocks"}>
          <div className="buttons-container">
            <FilterLink buttonType={'All'} />
            <FilterLink buttonType={'Active'} />
            <FilterLink buttonType={'Completed'} />
          </div>
        </div>
    )
}

export default FiltersBlock