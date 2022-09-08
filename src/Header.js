import React from "react";
import {Avatar, IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Header.css'
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

const Header = () => {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const signOut = ()=>{

    auth.signOut().then(()=>{
      dispatch(logout())
    })
  }

    return ( 
        <div className="header">
          <div className="header__left">
            <IconButton>
             <MenuIcon/>
            </IconButton>
            <img src="" alt="" />
           </div>
          <div className="header__middle">
           <SearchIcon/>
           <input type="text" placeholder="Search mail" />
           <ArrowDropDownIcon/>
          </div>
          <div className="header__right">
          <IconButton>
           <AppsIcon/>
         </IconButton>

         <IconButton>
           <NotificationsIcon/>
         </IconButton>

         <Avatar onClick={signOut} src={user?.photoUrl}/>
          </div>
        </div>
     );
}
 
export default Header;