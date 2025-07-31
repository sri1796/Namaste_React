import {headerURL} from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Header = () => {
  const onlineStatus = useOnline();
  const [buttonName, setButtonName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={headerURL}
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online: {onlineStatus ? 'Active': 'Inactive'}</li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li>Cart</li>
          <button className="login" onClick={()=>{
            buttonName === "Login" ? setButtonName("Logout") : setButtonName("Login");
          }}>{buttonName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;