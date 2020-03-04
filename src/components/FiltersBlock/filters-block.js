import React from 'react'
import FilterLink from '../FilterLink/filter-link'
import './filters-block.scss'
import {TranslateTexts} from "../../constants";
import { useSelector } from "react-redux";

const FiltersBlock = () => {
  const TranslatedTexts = TranslateTexts(useSelector((state) => state.tasks.language))

    return (
        <div className={"filters-blocks"}>
          <div className="buttons-container">
            <FilterLink buttonName={TranslatedTexts.allFilter} buttonType={'All'} />
            <FilterLink buttonName={TranslatedTexts.activeFilter} buttonType={'Active'} />
            <FilterLink buttonName={TranslatedTexts.completedFilter} buttonType={'Completed'} />
          </div>
        </div>
    )
}

export default FiltersBlock