import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from './components/Footer'
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Home } from './pages/Home.js'
import { PageNotFound } from "./pages/PageNotFound.js";
import { Checkout } from "./pages/Checkout.js";
import { ContactUs } from "./pages/ContactUs.js";
import { Blog } from "./pages/Blog.js";
import { BlogDetail } from "./pages/BlogDetail.js";
import { Profile } from "./pages/Profile.js";
import { StarZone } from "./pages/StarZone.js";
import { Orders } from "./pages/Orders.js";
import { WishList } from "./pages/WishList.js";
import Support from "./pages/Support.js";
import { Notification } from "./pages/Notification.js";
import { Cart } from "./pages/Cart.js";
import ProductDetails from "./pages/ProductDetails.js";
import { CategoryWiseFetch } from "./components/CategoryWiseFetch.js";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useEffect, useState } from "react";


function App() {
  const [pathvalue,setpathvalue] = useState(true)
  const [nav,setnav] = useState(true)
  const[v,setv] = useState(+localStorage.getItem('navvalue'))
  useEffect(()=>{
    if(window.location.pathname.substring(1,Infinity) === '' || window.location.pathname.substring(1,Infinity)==='cart' || window.location.pathname.substring(1,Infinity)==='checkout')
    {
      setpathvalue(false)
    }
    else{
      setpathvalue(true)
    }
  })
  useEffect(()=>{
    if(window.location.pathname.substring(1,Infinity) === 'account/signin' || window.location.pathname.substring(1,Infinity) === 'account/signup' || window.location.pathname.substring(1,Infinity) === 'checkout' || window.location.pathname.substring(1,Infinity) === 'blog' || window.location.pathname.substring(1,Infinity) === 'blog/detail'
    || window.location.pathname.substring(1,Infinity) === 'contact-us'
    )
    {
      if(window.location.pathname.substring(1,Infinity) === 'account/signin')
      {
        setv(0)
      }
      else if(window.location.pathname.substring(1,Infinity) === 'account/signup')
      {
        setv(1)
      }
      else if(window.location.pathname.substring(1,Infinity) === 'checkout')
      {
        setv(2)
      }
      else if(window.location.pathname.substring(1,Infinity) === 'contact-us')
      {
        setv(3)
      }
      else if(window.location.pathname.substring(1,Infinity) === 'blog')
      {
        setv(4)
      }
      else if(window.location.pathname.substring(1,Infinity) === 'blog/detail')
      {
        setv(5)
      }
      setnav(true)
    }
    else{
      setnav(false)
    }
  })
  useEffect(()=>{localStorage.setItem('navvalue',v)})
  const num = Object.keys(localStorage).filter(i=>{return i.substring(0,7)==="itemurl"}).length
  const [open, setOpen] = useState(false);
  const[cartlength,setCartlength] = useState(num);
  useEffect(()=>{setCartlength(Object.keys(localStorage).filter(i=>{return i.substring(0,7)==="itemurl"}).length)})
  const handleClose = (event, reason) => {
    if (reason === "clickaway") { 
      return;
    }

    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
    let temp = cartlength
    temp++;
    setCartlength(temp)
    localStorage.setItem("cartlength",cartlength)
    localStorage.setItem(`itemcount${cartlength}`,localStorage.getItem('itemcount'));
    localStorage.setItem('cartlength',cartlength);
    localStorage.setItem(`itemoriginalprice${cartlength}`,localStorage.getItem('originalprice'));
    localStorage.setItem(`itemdiscount${cartlength}`,localStorage.getItem('discount'));
    localStorage.setItem(`itemname${cartlength}`,localStorage.getItem('productname'));
    localStorage.setItem(`itemurl${cartlength}`,localStorage.getItem('imgurl'));
    localStorage.setItem(`itemprice${cartlength}`,localStorage.getItem('productprice'))
    setOpen(true);
  };
  return (
    <>
    <Header value={nav===true?v:undefined} cartlength = {cartlength} selectname={localStorage.getItem('categoryHead') && pathvalue===true  ? localStorage.getItem('categoryHead') : 'All category'} cartcount={localStorage.getItem('cartlength')}/>
    <Router>
      <Routes>
        <Route exact path={'/' || '/home'} element={<Home></Home>}></Route>
        <Route exact path={"/account/signin"} element={<Signin></Signin>}></Route>
        <Route exact path={"/account/signup"} element={<Signup></Signup>}></Route>
        <Route exact path={"/account/profile"} element={<Profile></Profile>}></Route>
        <Route exact path={"/account/orders"} element={<Orders></Orders>}></Route>
        <Route exact path={"/account/wishlist"} element={<WishList></WishList>}></Route>
        <Route exact path={"/account/notification"} element={<Notification></Notification>}></Route>
        <Route exact path={"/product/detail"} element={<ProductDetails></ProductDetails>}></Route>
        <Route exact path={"/star/zone"} element={<StarZone></StarZone>}></Route>
        <Route exact path={"/support"} element={<Support></Support>}></Route>
        <Route exact path={"/cart"} element={<Cart></Cart>}></Route>
        <Route exact path={"/checkout"} element={<Checkout></Checkout>}></Route>
        <Route exact path={"/contact-us"} element={<ContactUs></ContactUs>}></Route>
        <Route exact path={"/blog"} element={<Blog></Blog>}></Route>
        <Route exact path={"/blog/detail"} element={<BlogDetail></BlogDetail>}></Route>
        <Route exact path={'/category/*'} element={<CategoryWiseFetch></CategoryWiseFetch>}></Route>
        <Route exact path={'/productdetails/*'} element={<ProductDetails openvalue = {open} Click={handleClick} Close={handleClose}/>}></Route>
        <Route exact path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </Router>
    <Footer></Footer>
    </>
  );
}

export default App;
