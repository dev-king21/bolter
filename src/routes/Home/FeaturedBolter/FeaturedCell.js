import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
//import StarRatingComponent from 'react-star-rating-component';
const FeaturedCell = (props) => {
    const {item,categories} = props
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
        <div className = "mt-2 bg-white rounded p-4 shadow">
            <div className = "row">
                <div>
                    <img src={item.avatar} style={{height:'60px'}}></img>
                </div>
                <div className ="ml-3">
                    <h4 className = "mb-0"><strong>{item.name}</strong></h4>
                    <small>{item.des}</small>
                    <h6><strong>{item.address}</strong></h6> 
                    <div className = "d-flex align-items-center">
                        <div className = "d-flex align-items-center">
                            <Rating name="read-only" value={item.rate} readOnly />    
                        </div>
                        <h6 className="mb-0"><strong>( {item.review_count} )</strong></h6>
                    </div>
                </div>
            </div>
            <div className ="d-flex justify-content-between align-items-center mb-2">
                <div className = "my-2">
                    From <strong>{`${item.budget} EUR`}</strong> / hr
                </div>
                {item.rank?
                    <div className = "d-flex align-items-center">
                        <span className = "mr-2">Top Rated Tasker</span>        
                        <img src={require(`assets/images/symbols/Top-Rated.png`)} style={{height:'30px'}}></img>
                    </div>
                    :null
                }

            </div>
            <Divider light/>
            <div className = "d-flex flex-wrap mt-3">
                {item.category.map((option,index)=>
                    <div key = {index} className = "border mr-2 py-2 px-3">
                        {categories.find(row=>row.id==option).job}
                    </div>
                )}
            </div>
            <div className = "d-flex mt-3">
                <div className = "mr-3">
                    <strong>{item.job_count}</strong> jobs
                </div>
                {item.client_count?
                    <div className = "ml-3 d-flex align-items-center">
                        <img src={require(`assets/images/symbols/recurring.png`)} style={{height:'20px'}}></img>
                        <div className = "ml-2">
                            <strong>{item.client_count}</strong> Recurring client
                        </div>
                    </div>
                    :null
                }
            </div>
            <div className = "mt-3">
                <Button variant="contained" className="text-white mr-4"
                    style={{backgroundColor:'rgba(81, 168, 219, 0.7)'}}
                >
                        Book a Bolter
                </Button>
            </div>

            
        </div>
    )
}
export default FeaturedCell;