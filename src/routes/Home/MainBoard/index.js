import React from 'react';
import MainSearch from './MainSearch.js'
import Category from './Category.js'
const MainBoard = (props) => {
   const {categories} = props
    return(
        <div className = "py-5 main-bg-color">
            <MainSearch
                categories={categories}
            />
            <Category
                categories={categories}
            />
        </div>
    )
}
export default MainBoard;