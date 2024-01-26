import React from 'react'
import { Search } from "./Search";
import { Navbar } from './Navbar';



export const Header = (props) => {
    return (
        <div className="sticky-top">
            <header class="p-3 border-bottom bg-light">
                <div class="container-fluid">
                    <div class="row g-3">
                        <div class="col-md-3 text-center" style={{}}>
                            <a href="/">
                                <img alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA8Ltfh0cWksvpWYNkEtSYDcA1scr3sOQ5P6jFDWg0gA&s" style={{width:"45px",height:"42px",marginRight:"0%"}}/>
                            </a>
                        </div>
                        <div class="col-md-5">
                            <div className="d-flex">
                                {/* <DropDown Initialname='ALL' list={data}/> */}
                                <span className="w-100">
                                    <Search id="headerSearch"  />
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
            <Navbar cartlength={props.cartlength} value={+props.value} selectname={props.selectname}/>
        </div>
    )
}
