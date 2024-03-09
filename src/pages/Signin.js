import React, { useEffect, useState } from 'react'
import { ImGoogle2 } from "react-icons/im";
import { FaSquareXTwitter, FaUserCheck } from 'react-icons/fa6'
import { IoLogoFacebook } from 'react-icons/io5'
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { RiLockPasswordFill } from "react-icons/ri";
import { Spinner } from 'react-bootstrap';
import { Button, Container, Divider, FormLabel, Grid, Icon, Link, Stack, TextField, Typography } from '@mui/material';
export const Signin = () => {
  const [data,Setdata] = useState([]);
  
  const [spinnerdisplay,Setspinnerdisplay] = useState('none');
  // const [passowrd,Setpassword] = useState('');
  const [phonenumber,SetPhonenumber] = useState('');
  useEffect(()=>{
    (async()=>{
      await fetch('http://localhost:8000/userdetails').then(i=>{
        return i.json();
      }).then(i=>{
        Setdata(i);
      })
    })()
  },[]);
  const handleClick = ()=>{
    Setspinnerdisplay('');
    setTimeout(()=>{
    Setspinnerdisplay('none');
    },3000);
    
    let check=false;
    for(let i=0;i<data.length;i++){
      if(data[i].phoneNumber === +document.getElementById('mobileNo').value   && data[i].password === document.getElementById('password').value){
        check=true;
        break
      }
    }
    if(check===true){
      localStorage.setItem('token','abcd');
      document.getElementById('usericon').innerHTML = <FaUserCheck/>
    }
    else{
      localStorage.removeItem('token');
    }
    
  }
  return (
    <>
      <div class="container my-3">
        <div class="row border">
          <div class="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
              <Link variant='button' href="/">
                  <img src="https://www.mswipe.com/assets/images/signin_marchant_mswipe_Illustrations.svg" alt="..." class="img-fluid" />
              </Link>
          </div>
          <div class="col-md-6 p-3">
          <Typography variant="h5" style={{textAlign:"center"}} component="div" fontWeight={'bold'} sx={{ flexGrow: "1" }}>
            Sign In
          </Typography>
            {/* <h4 class="text-center">Sign In</h4> */}
            <form style={{marginTop:"4%"}}>
              <Stack direction={'column'} spacing={2} >
              <Container>
                <Stack direction={'column'} >
                  <FormLabel>Mobile no</FormLabel>
                  <TextField variant='outlined' color='primary' size='small'
                  InputProps={{
                    startAdornment:(<Icon> <HiOutlineDevicePhoneMobile size={20}/> </Icon> )
                  }}
                  name="mobileNo"
                  onKeyUp={(e)=>{
                    console.log("Phone Number:",e.target.value)
                  }}
                  onChange={(e)=>{
                    SetPhonenumber(e.target.value);
                  }} 
                  type="number"
                  placeholder="Mobile no without country code"
                  max="999999999999999" min="9999" id="mobileNo" />
                </Stack>
              </Container>
              <Spinner className={`d-${spinnerdisplay}`}  style={{margin:"-1%",position:"absolute"}} animation='border' variant=''/>
              <Container>
                  <Stack direction={'column'}>
                    <FormLabel>Password</FormLabel>
                    <TextField variant='outlined' color='primary' size='small'
                    InputProps={{
                      startAdornment:(<Icon><RiLockPasswordFill size={20}/> </Icon> )
                    }}
                    name="password"
                    onKeyUp={(e)=>{
                      console.log("Phone Number:",e.target.value)
                    }}
                    onChange={(e)=>{
                      SetPhonenumber(e.target.value);
                    }} 
                    type="password"
                    placeholder='*********' id="password" />
                  </Stack>
              </Container>
              </Stack>
              <Grid direction={'column'} spacing={2} container sx={{marginTop:"9%"}}>
                <Grid item>
                  <center>
                    <Button onClick={handleClick} size='medium' variant='contained' color='primary' >
                      Log In
                    </Button>
                  </center>
                </Grid>
              </Grid>
              
              <Stack justifyContent={'space-between'} direction={'row'} style={{marginTop:"10%"}}>
              <Link variant='button' title="Sign Up" href="/account/signup">
                  Create your account
              </Link>
                <Link variant='button' title="Forgot Password" href="/account/forgotpassword">Forgot password?</Link>
              </Stack>

              <div className="cleaarfix"></div>
              
              <Stack direction={'column'}>
                <Divider component="div" orientation='horizontal' role="presentation">
                  <Typography color={'Highlight'}>
                                  Or you can join with
                  </Typography>
                </Divider>
                <Stack spacing={2} direction={'row'} justifyContent={'center'} style={{marginTop:"3%"}}>
                  <Link variant='button' href="/">
                      <FaSquareXTwitter color='#1da1f2' size={"30"}  />
                    </Link>
                    <Link variant='button' href="/" >
                      <IoLogoFacebook color='#112f5c' size={"30"} />
                    </Link>
                    <Link href="/" variant='button'>
                      <ImGoogle2 size={"30"} color='#ea4335' />
                    </Link>
                </Stack>
              </Stack>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
