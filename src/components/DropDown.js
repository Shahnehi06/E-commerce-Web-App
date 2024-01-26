import { Button, List, ListItem } from '@mui/material';
import React, {  useState } from 'react'

export const DropDown = (props) => {
    const [dropdownName, SetDropdownname] = useState(props.Initialname);
    // const [dropdownvalue,Setdropdownvalue] = useState('');
    let myarray = props.list;
  return (
    <div class="dropdown">
        <Button variant='contained' class="btn btn-primary dropdown-toggle active" type="button" data-bs-toggle="dropdown" id='dropdownbuttonvalue' aria-expanded="false">
          {dropdownName}
        </Button>
        <List class="dropdown-menu">
            <ListItem>
                <button className='dropdown-item' 
                    onClick={()=>{
                        SetDropdownname(props.Initialname);
                        // Setdropdownvalue('');
                    }}
                    type='button'>
                    {props.Initialname}
                </button>
            </ListItem>
            {
                myarray.map((i)=>(
                    <ListItem>
                        <button class="dropdown-item"
                            onClick={()=>{
                                SetDropdownname(i.Shopping_Category);
                                // Setdropdownvalue(i.value);
                            }}
                            type="button">{i.Shopping_Category}</button>
                    </ListItem>
                ))
            }
        </List>
    </div>
  )
}
