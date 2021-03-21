import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';

const CategoryCell = (props) => {
    const {item} = props
    const History = useHistory();
    const [hover_flag,setHoverFlag] = useState(false)
    const viewBolter=(index)=>{
        console.log(index)
        History.push({
            pathname: '/bolter',
            state: { id: index }
        })
    }
    return(
        <div className = "mt-2 bg-white rounded">
            <div className = "d-flex align-items-center p-3">
                <img src={require(`assets/images/categories/Icon - ${item.id}.png`)} 
                 style = {{height:'50px'}}
                 alt="Jambo" title="Jambo"/>
                <div className="ml-3">
                    {item.job}
                </div>
            </div>
            <div className = {`d-flex align-items-center py-2 catetory-border ${hover_flag?'category-border-hover text-white':'category-border-normal'}`}
                 onMouseEnter = {()=>setHoverFlag(true)}
                 onMouseLeave = {()=>setHoverFlag(false)}
                 onClick={()=>{viewBolter()}}
            >
                <div className = "ml-3">
                    View Bolters
                </div>
                <i class="zmdi zmdi-long-arrow-right zmdi-hc-2x ml-2"></i>
            </div>
            
        </div>
    )
}
export default CategoryCell;