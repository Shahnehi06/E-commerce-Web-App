import React, { useEffect, useState } from 'react'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { BsFilePerson, BsFillStarFill, BsInfoCircleFill } from 'react-icons/bs'
import { FaHeart, FaSignOutAlt } from 'react-icons/fa'
import { FaCartShopping, FaUserCheck, FaUserXmark } from 'react-icons/fa6'
import { IoNotificationsSharp } from 'react-icons/io5'
import { CategoryRedirect } from './CategoryRedirect'
import { Box, Button,  IconButton,  Tab, Tabs, ThemeProvider, Typography, createTheme } from '@mui/material'
import styled from '@emotion/styled'




export const Navbar = (props) => {
  const customCompanyName  = createTheme({
    palette:{
        primary:{
            main:'#FFFFFF'
        },
        secondary:{
            main:'#FFFFFF'
        }            
    }
})
const CompanyButton = styled(Typography)`
${({ theme }) => `
cursor: pointer;
background-color: ${theme.palette.primary.main};
transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
})
};
&:hover{
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.3) translateX(10%);
}
`}
`; 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black p-0">
      <div className="container-fluid">
      <div className="row">
        <div className="col align-self-start">
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        </div>
        <div className="col">
          <ThemeProvider theme={customCompanyName}>
            <CompanyButton onClick={()=>{window.location.href='/'}} color={'whitesmoke'} style={{backgroundColor:'black',width:'200px',fontSize:20}}>
              <Typography component={Button}>
                E-Commerce
              </Typography>
            </CompanyButton>
          </ThemeProvider>
        </div>
      </div>        
          <CategoryRedirect choicename = {props.selectname} />
      <div className="navbar-collapse collapse" id="navbarSupportedContent">
        <Box sx={{maxWidth: window.screen.width-20,color:'white'}}>
          <Tabs
          variant='scrollable'
          scrollButtons='auto'
          allowScrollButtonsMobile
          container direction={'row'}value={+props.value} TabIndicatorProps={{
                style: {
                  backgroundColor: 'white'
                }
          }}>
              <Tab 
              onClick={()=>{
                localStorage.setItem('navvalue',0);
                localStorage.setItem('categoryHead','all category');
                window.location.href='/account/signin'
              }} 
              style={{color:'whitesmoke'}} 
                label='Sign In'  />
              <Tab 
              onClick={()=>{
                localStorage.setItem('categoryHead','all category');
                localStorage.setItem('navvalue',1)
                window.location.href='/account/signup';
                }}  
                label="Sign up"style={{color:'whitesmoke'}} />
              <Tab 
              onClick={()=>{localStorage.setItem('categoryHead','all category');
                localStorage.setItem('navvalue',2)
                window.location.href='/checkout'}} 
              style={{color:'whitesmoke'}}  label="checkout" />
              <Tab  
              onClick={()=>{localStorage.setItem('categoryHead','all category');
                localStorage.setItem('navvalue',3)
                window.location.href='/contact-us'}}  
              label="contact us" style={{color:'whitesmoke'}} />
              <Tab  style={{color:'whitesmoke'}} label="blog" 
              onClick={()=>{localStorage.setItem('categoryHead','all category');
                localStorage.setItem('navvalue',4)
                window.location.href='/blog'}}
               />
              <Tab label="blog details" style={{color:'whitesmoke'}} 
              onClick={()=>{localStorage.setItem('categoryHead','all category');
                localStorage.setItem('navvalue',5)
                window.location.href='/blog/detail'}} 
              />
            {/* </Stack> */}
          </Tabs>
        </Box>
      </div>
      <div className="row">
        <div className="col align-self-end" style={{marginRight:"0%"}}>
      <table style={{marginLeft:"0%"}}>
            <tr>
              <td>

                  <div class="position-relative d-inline" style={{marginRight:"0%"}}>
                      <a class="btn btn-primary" href="/cart">
                          <FaCartShopping />
                          <div class="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle">
                        {props.cartlength}
                      </div>
                      </a>
                  </div>
              </td>
              <td>
                <div class="mx-3">
                      <button type="button" class="btn btn-primary  border" data-toggle="dropdown" aria-expanded="false" aria-label="Profile" data-bs-toggle="dropdown">
                        <span >
                          {localStorage.getItem('token')?(<FaUserCheck />):(<FaUserXmark id='usericon' />)}
                        </span>
                      </button>
                      <ul class="dropdown-menu" style={{width:"auto"}}>
                          <li>
                              <a class="dropdown-item" href="/account/profile">
                                  <BsFilePerson /> My Profile</a>
                          </li>
                          <li>
                              <a class="dropdown-item" href="/star/zone">
                                  <BsFillStarFill color="#ffc107"/> Star Zone</a>
                              </li>
                          <li>
                              <a class="dropdown-item" href="/account/orders"><AiOutlineUnorderedList /> Orders</a>
                          </li>
                          <li>
                              <a class="dropdown-item" href="/account/wishlist"><FaHeart color="#dc3545" /> Wishlist</a>
                          </li>
                          <li>
                              <hr class="dropdown-divider" />
                          </li>
                          <li>
                              <a class="dropdown-item" href="/account/notification"><IoNotificationsSharp color="blue" /> Notification</a>
                          </li>
                          <li>
                              <a class="dropdown-item" href="/support"><BsInfoCircleFill color="red" /> Support</a>
                          </li>
                          <li><hr class="dropdown-divider" /></li>
                          <li>
                              <a class="dropdown-item" href="/"><FaSignOutAlt /> Logout</a>
                          </li>
                      </ul>
                  </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </nav>
  )
}
