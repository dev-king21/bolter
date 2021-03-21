import React,{useState} from 'react';


const WorkstepCard = (props) => {
const {item} = props
    return(
        <div className = "text-center">
             
             <img src={require(`assets/images/symbols/Checked Green.png`)} style={{height:'30px'}}></img>
             <h6 className = "mt-2"><strong>{item.description}</strong></h6>
        </div>
    )
}
export default WorkstepCard;