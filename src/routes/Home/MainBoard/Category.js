import React,{useState} from 'react';
import CategoryCell from './CategoryCell.js'
const MainSearch = (props) => {
    const {categories} = props
    return(
        <div className = "container mt-3">
            <div className = "row">
                {categories.map(item=>
                    <div className = "col-md-3" key = {item.id}>
                        <CategoryCell
                            item={item}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
export default MainSearch;