import {headerURL} from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Header = () => {
  const onlineStatus = useOnline();
  const [buttonName, setButtonName] = useState("Login");
  return (
    <div className="flex justify-between m-2 p-5 border-1">
      <div className="logo-container">
        <img
          className="w-54"
          src={headerURL}
          alt="logo"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex gap-7">
          <li>Online: {onlineStatus ? 'Active 😝': 'Inactive 🥵'}</li>
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