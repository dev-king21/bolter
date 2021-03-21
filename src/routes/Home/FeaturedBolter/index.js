import React,{useState} from 'react';
import FeaturedCell from './FeaturedCell.js'

const BecomeABolter = (props) => {
    const {categories} = props
    const featruedBolters=[
        {
            id:1,
            name:'Ronald Nichols',
            des:'The best plumber for small tasks',
            address:'Berlin, Germany',
            budget:'35',
            rate:'5',
            review_count:'26',
            rank:1,
            category:[5,3],
            job_count:28,
            avatar:require(`assets/images/avatars/avatar1.png`),
            client_count:3,
        },
        {
            id:2,
            name:'Martha Ward',
            des:'I will help you with to assemble all your furniture',
            address:'Berlin, Germany',
            budget:'45',
            rate:'5',
            review_count:'15',
            rank:1,
            category:[6,3],
            job_count:15,
            avatar:require(`assets/images/avatars/avatar2.png`),
            client_count:1,
        },
        {
            id:3,
            name:'George Ryan',
            des:'All your moving problems will be solved ',
            address:'Berlin, Germany',
            budget:'30',
            rate:'4',
            review_count:'7',
            rank:0,
            category:[7],
            job_count:10,
            avatar:require(`assets/images/avatars/avatar3.png`),
            client_count:0,
        }
    ]
    return(
        <div className = "bg-white">
            <div className = "pt-5 col-md-10 offset-md-1"
                style={{width:'90%'}}
                >
                <div className = "text-center">
                    <img src={require(`assets/images/symbols/divider.png`)} style={{height:'5px'}} ></img>
                </div>
                <div className = "text-center mt-5">
                    <h2><strong> OUR FEATRUED BOLTERS</strong></h2>
                </div>
                <div className = "text-center mt-3">
                    <h4>We're the best of the best - and we're here to make your lives easier!</h4>
                </div>
                <div className = "row mt-5">
                    {featruedBolters.map(item=>
                        <div className = "col-md-4" key = {item.id}>
                            <FeaturedCell
                                item={item}
                                categories={categories}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default BecomeABolter;