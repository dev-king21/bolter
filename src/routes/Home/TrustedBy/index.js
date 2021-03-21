import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
const TrustedBy = (props) => {
   
    return(
        <div className = "">
            <div className = "pt-5 col-md-10 offset-md-1"
                style={{ width:'90%' }}
                >
                <div className = "text-center">
                    <img src={require(`assets/images/symbols/divider.png`)} style={{height:'5px'}} ></img>
                </div>
                <div className = "text-center mt-5">
                    <h2><strong> Trusted By</strong></h2>
                </div>
                <div className = "text-center mt-3">
                    <h4>Bolter is proud to be associated with the following companies:</h4>
                </div>
                <div className = "text-center">
                    <img src={require(`assets/images/symbols/TrustedBy.png`)} style={{width:'80%'}} ></img>
                </div>
                <div className = "text-center mt-3">
                    <h4>+ 100k more companies</h4>
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
            <div className = "rectangle-bg">
                <div
                    style = {{height:'300px'}}
                ></div>
                <div className = "py-5 col-md-10 offset-md-1 row"
                    style={{ width:'90%' }}
                    >
                    <div className = "col-md-6">
                        <div className = "">
                            <img src={require(`assets/images/symbols/divider.png`)} style={{height:'5px'}} ></img>
                        </div>
                        <div className = " mt-5">
                            <h2><strong> Contact us</strong></h2>
                        </div>
                        <div className = "mt-4" style = {{width:'70%'}}>
                            <h4>{`Please send us a message if you have any questions or concerns regarding our business operations here at Bolter. We warmly welcome any feedback on how we can improve our platform for both our valued clients and freelancers.`}</h4>
                        </div>
                        <div className = " mt-5">
                            <h2><strong> Address</strong></h2>
                        </div>
                        <div className = "mt-3">
                            <h4> {`69/71 Belziger Straße `}</h4>
                            <h4>{` 10823 Berlin `}</h4>
                            <h4>{`Germany`} </h4>
                        </div>
                    </div>
                    <div className = "col-md-6">
                        <div className = "row">
                            <div className = "col-6" >
                                <h4>name</h4>
                                <input
                                id='name'
                                style = {{height:'54px', width: '100%',border: '1px solid #19C79D' }}
                                >
                                </input>
                            </div>
                            <div className = "col-6">
                                <h4>E-mail</h4>
                                <input
                                id='email'
                                style = {{height:'54px', width: '100%',border: '1px solid #19C79D' }}
                                >
                                </input>
                            </div>
                        </div>
                        <div className = "mt-4">
                            <h4>company</h4>
                            <input
                            id='company'
                            style = {{height:'54px', width: '100%',border: '1px solid #19C79D' }}
                            >
                            </input>
                        </div>
                        <div className = "mt-4">
                            <h4>message</h4>
                            <input
                            id='message'
                            className = "w-100"
                            style = {{height:'153px',border: '1px solid #19C79D' }}
                            >
                            </input>
                        </div>
                        <div className="text-right mt-4">
                            <Button variant="contained" className="my-button text-white mx-2 border  my-border"
                                style={{backgroundColor:'rgba(81, 168, 219, 0.7)'}}
                            >
                                    Send Message
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TrustedBy;