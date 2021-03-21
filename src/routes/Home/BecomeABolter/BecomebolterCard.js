import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';

const BecomebolterCard = (props) => {
    const {item} = props
    const History = useHistory();
    const [hover_flag,setHoverFlag] = useState(false)
    const startNow=(index)=>{
        console.log(index)
        History.push({
            pathname: '/bolter',
            state: { id: index }
        })
    }
    return(
        <div className = "mt-2 bg-white rounded">
            <div className = "p-3">
                <img src={require(`assets/images/categories/Icon - ${item.id}.png`)} 
                 style = {{height:'50px'}}
                 alt="Jambo" title="Jambo"/>
                 <div className="mt-3">
                    <strong>{item.job}</strong>
                </div>
                <div className = "mt-3">
                    {item.description}
                </div>
            </div>
            
            
            <div className = {`d-flex align-items-center py-2 catetory-border ${hover_flag?'category-border-hover text-white':'category-border-gray'}`}
                 onMouseEnter = {()=>setHoverFlag(true)}
                 onMouseLeave = {()=>setHoverFlag(false)}
                 onClick={()=>{startNow()}}
            >
                <div className = "ml-3">
                    Start Now
                </div>
                <i class="zmdi zmdi-long-arrow-right zmdi-hc-2x ml-2"></i>
            </div>
           
            
        </div>
    )
}
export default BecomebolterCard;