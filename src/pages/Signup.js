import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FaSquareXTwitter } from 'react-icons/fa6'
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { ImGoogle2 } from 'react-icons/im'
import { IoLogoFacebook } from 'react-icons/io5'
import { CiLock } from "react-icons/ci";
import { Button, Divider, FormLabel, IconButton, Link, Stack, TextField, Typography } from '@mui/material';
import { Container } from 'react-bootstrap';

export const Signup = () => {
  const handleClick = ()=>{    
    (async()=>{
      await fetch('http://localhost:8000/addnewuser',{
        type:'cors',
        headers:{'Content-Type':'application/json'},
        method:'POST',
        body:JSON.stringify({
          firstname:document.getElementById('firstName').value,
          lastname:document.getElementById('lastName').value,
          birthDate:document.getElementById('birthDate').value,
          gender:null,
          email:document.getElementById('email').value,
          phoneNumber:document.getElementById('mobileNo').value,
          address:null,
          pincode:null,
          password:document.getElementById('password').value,
          confirmPassword:document.getElementById('confirmPassword').value
        })
      }).then(
        res=>{
          console.log(res);
          return res
        }
      ).then(d=>{
        console.log("Message:",d);
      })
      .catch(err=>{
        console.log(err)});
    })()
  }
  return (
    <>
      <div class="container my-3">
        <div class="row border">
          <div class="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
            <Link variant='body1' href="/">
              <img src="https://img.freepik.com/premium-vector/sign-page-abstract-concept-vector-illustration_107173-25670.jpg" alt="..." class="img-fluid" />
            </Link>
          </div>
          <div class="col-md-6 p-3">
          <Typography variant="h4" style={{textAlign:"center"}} component="div" fontWeight={'bold'} sx={{ flexGrow: "1" }}>
            Sign Up
          </Typography>
            <form>
              <Stack spacing={2} direction={'column'} style={{marginLeft:"10%"}}>
                <Stack spacing={2} direction={'row'} style={{marginTop:"40px"}}>
                  <Stack direction={'column'}>
                    <FormLabel>First Name</FormLabel>
                    <TextField  name='firstName' required="" id="firstName" type='text' label="First Name"  variant='outlined' size='small'/>
                  </Stack>
                  <Stack>
                    <FormLabel>Last Name</FormLabel>
                    <TextField name='lastName'  required="" id="lastName" type='text' label="Last Name"  variant='outlined' size='small'/>
                  </Stack>
                </Stack>
                {/* <div class="row mb-3"> */}
                  {/* <div class="col-md-6">   */}
                  <Stack spacing={2} direction={'row'}> 
                      <Stack direction={'column'}>
                        <FormLabel>Mobile no</FormLabel>
                        <TextField id="mobileNo"  name="mobileNo" type="number" placeholder="Mobile no without country code" InputProps={{ startAdornment:(<HiOutlineDevicePhoneMobile size={25}/>)}} color='primary' variant='outlined' size='small'/>
                      </Stack>
                      <Stack direction={'column'}>
                        <FormLabel>Birth Date</FormLabel>
                        <TextField  style={{fontFamily:""}}  id="birthDate"  name="birthDate" type="date" InputProps={{ startAdornment:(<LiaBirthdayCakeSolid size={25}/>)}} color='primary' variant='outlined' size='small'/>
                      </Stack>
                  </Stack>
                  <Stack as={'div'}>
                    <FormLabel>Email</FormLabel>
                    <TextField id="email" style={{maxWidth:"500px"}}  placeholder=" example@example.com" name="email" type="email" InputProps={{ startAdornment:(<MdOutlineMail size={25}/>)}} color='primary' variant='outlined' size='small'/>
                  </Stack>
                  <Stack spacing={2} direction={'row'}>
                    <Stack>
                      <FormLabel>Your password</FormLabel>
                          <TextField id='password'  placeholder=" ******"  required="" maxlength="20" minlength="8" name="password" type="password" InputProps={{ startAdornment:( <CiLock size={25}/>)}} color='primary' variant='outlined' size='small'/>
                    </Stack>
                    <Stack>
                      <FormLabel>Confirm password</FormLabel>
                          <TextField id='confirmPassword'  placeholder=" ******"  required="" maxlength="20" minlength="8" name="confirmPassword" type="password" InputProps={{ startAdornment:(<CiLock size={25}/>)}} color='primary' variant='outlined' size='small'/>
                    </Stack>
                  </Stack>
              </Stack>
              <Container style={{textAlign:"center",marginTop:"10%"}}>
                <Button style={{marginTop:"1%"}} variant='contained' onClick={handleClick} color='primary'>Create</Button>                
              </Container>
              <Stack justifyContent={'space-between'} direction={'row'} style={{marginTop:"3%"}}>
                <Link variant='button'  title="Sign In" href="/account/signin">Sign In</Link>
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
