import React,{useState} from 'react';
import BecomebolterCard from './BecomebolterCard.js'
import WorkstepCard from './WorkstepCard.js'
import Button from '@material-ui/core/Button';


const BecomeABolter = (props) => {
    const {categories} = props
    const worksteps=[
        {id:1,description:'Choose your own hours'},
        {id:2,description:'Choose your own tasks'},
        {id:3,description:'Choose your own rates'},
        {id:4,description:'Choose your own territories'},
        
    ]
   
    return(
        <div style={{ backgroundColor: '#F9F9F9'}} >
            <div className = "pt-5 col-md-10 offset-md-1"
                style={{ width:'90%' }}
                >
                <div className = "text-center">
                    <img src={require(`assets/images/symbols/divider.png`)} style={{height:'5px'}} ></img>
                </div>
                <div className = "text-center mt-5">
                    <h2><strong> BECOME A BOLTER</strong></h2>
                </div>
                <div className = "text-center mt-3">
                    <h4>Become your own boss and earn money at Bolter!</h4>
                </div>
                <div className = "row mt-5">
                    {worksteps.map(item=>
                        <div className = "col-md-3" key = {item.id}>
                            <WorkstepCard
                                item={item}
                            />
                        </div>
                    )}
                </div>
                <div className = "row mt-5">
                    {categories.filter(item=>[1,2,3,8].indexOf(item.id)!=-1).map(item=>
                        <div className = "col-md-3" key = {item.id}>
                            <BecomebolterCard
                                item={item}
                            />
                        </div>
                    )}
                </div>
            </div>
            <div className = "row my-4">
                <div className="col-6 text-right">
                    <Button variant="contained" className="my-button text-white mx-2 border  my-border"
                        style={{backgroundColor:'rgba(81, 168, 219, 0.7)'}}
                    >
                            View Carreers
                    </Button>
                </div>
                <div className="col-6">
                    <Button variant="contained" className="my-button bg-white mx-2 border my-border"
                        style={{color:'rgba(81, 168, 219, 0.7)'}}
                    >
                            Become a Bolter
                    </Button>
                </div>
            </div>

        </div>
    )
}
export default BecomeABolter;