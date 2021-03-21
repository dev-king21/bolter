import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
const MainSearch = (props) => {
    const {categories} = props
    const [category,setCategory] = useState(1)
    const [address,setAddress] = useState('')
    return(
        <div className = "container">
            <div className = "bg-white">
                <div className = "d-flex align-items-center px-5 py-3">
                    <div className ="col-md-4 my-2 pr-4 offset-md-1">
                        <div className = "mr-4">
                            <div className = "d-flex align-items-center">
                                <span> I'm looking for</span>
                                <i class="zmdi zmdi-alert-circle zmdi-hc-2x success-color ml-3"></i>
                            </div>
                            <TextField
                                id="address"
                                className="mt-0"
                                select
                                value={category}
                                onChange={(event)=>setCategory(event.target.value)}
                                SelectProps={{}}
                                placeholder="Cleaning"
                                margin="normal"
                                fullWidth
                            >
                                {categories.map(option => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.job}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                    </div>
                    <div className ="col-md-4 my-2 pl-4">
                        <div className = "ml-4">
                            <span> I'm looking for</span>
                            <TextField
                                id="input-with-icon-textfield"
                                className="mt-0"
                                value={address}
                                onChange={(event)=>setAddress(event.target.value)}
                                SelectProps={{}}
                                placeholder="Your city, street name, zipcode"
                                margin="normal"
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <i class="zmdi zmdi-pin zmdi-hc-2x"></i>
                                      </InputAdornment>
                                    ),
                                }}
                            >
                            </TextField>
                        </div>
                    </div>
                    <div className ="col-md-3 my-2 pl-4">
                        <div className="ml-4">
                            <Button variant="contained" className="text-white mr-4"
                                style={{backgroundColor:'rgba(81, 168, 219, 0.7)'}}
                            >
                                    Book a Bolter
                            </Button>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}
export default MainSearch;