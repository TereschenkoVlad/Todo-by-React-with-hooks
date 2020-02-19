import React from 'react'
import FilterLink from '../FilterLink/filter-link'
import './footer.scss'

const Footer = () => {

    return (
        <footer className={"footer"}>
            <span>Show:</span>
            <FilterLink buttonType={'All'} />
            <FilterLink buttonType={'Active'} />
            <FilterLink buttonType={'Completed'} />
        </footer>
    )
}

export default Footer