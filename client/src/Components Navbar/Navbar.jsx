import React,{useEffect} from 'react'
import "./Navbar.css";
import logo from'./logo.ico'
import SearchBar from './SearchBar/SearchBar';
import {RiVideoAddLine} from 'react-icons/ri';
import  { IoMdNotificationsOutline } from "react-icons/io";
import {BiUserCircle} from 'react-icons/bi';
import {GoogleLogin} from "react-google-login";
import { Link } from 'react-router-dom';
import {gapi} from "gapi-script";
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
function Navbar({toggleDrawer}) {
   const CurrentUser = null;
  // const CurrentUser = {
  //   result: {
  //     email: "xyz@mail.com",
  //     joineOn: "2222-07-15T09:57:23.489Z",
  //   },
  // };
  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId: "689979529662-d2e520jcl2nmvjes6g8ai3vku0ilfuen.apps.googleusercontent.com",
        scope:"email",
      });
    }
    gapi.load("client:auth2", start);  
  },
  []);


  const dispatch=useDispatch();
  const onSuccess = (response) => {
    const Email= response?.profileObj.email;
    console.log(Email);
    dispatch(login({email:Email}))
  };

  const onFailure = (response) => {
    console.log("Failed",response);
  };
  return (
  
    <div className="Container_Navbar">
      <div className="Burger_Logo_Navbar">
        <div className="burger" onClick={toggleDrawer}>
          <p></p>
          <p></p>
          <p></p>
        </div>
       <Link to={'/'} className='logo_div_Navbar'>
          <img src={logo} alt="" />
          <p className='logo_tittal_navbar'>YouTube</p>
        </Link>
      </div>
      <SearchBar />
      <RiVideoAddLine size={22} className={"vid_ball_Navbar"}/>
        <div className="Apps_Box">
           <p className="appBox"></p>
           <p className="appBox"></p>
           <p className="appBox"></p>
           <p className="appBox"></p>
           <p className="appBox"></p>
           <p className="appBox"></p>
           <p className="appBox"></p>
           <p className="appBox"></p>
           <p className="appBox"></p>  
        </div>
      <IoMdNotificationsOutline size={22}  className={"vid_ball_Navbar" }/>
       <div className="Auth_cont_Navbar">
        {
          CurrentUser ? (
          <>
          <div className='Channel_logo_App'>
            <p className="fstChar_logo_App">
              {
                CurrentUser?.result.name ?(
                  <>
                  {CurrentUser?.result.name.charAt(0).toUpperCase()}
                  </>
                ):(<>
                {CurrentUser?.result.email.charAt(0).toUpperCase()}
                </>)
              }
            </p>
          </div>
          </>
          ) : (
          <>
          <GoogleLogin
          clientId="689979529662-d2e520jcl2nmvjes6g8ai3vku0ilfuen.apps.googleusercontent.com"
          onSuccess={onSuccess}
          onFailure={onFailure}

          />
            <p className="Auth_Btn">
            <BiUserCircle size={22} />
            <b>Sing in</b>
            </p>
          
          </>
        )}
       </div>
    </div>  
  );
}
export default Navbar
