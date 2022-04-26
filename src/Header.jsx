import React from "react";
import logoBackgroundWhite1 from "./logoBackgroundWhite1.png";
import { Button, IconButton } from "@material-ui/core";
import "./Header.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Header() {
   return (
      <div className="header">
         {/* Header */}
         <div className="header__left">
            <img src={logoBackgroundWhite1} alt="error" />
         </div>
         <div className="header__center">
            <IconButton className="icon__color">
               <small>Send & Receive</small>
            </IconButton>
            <IconButton className="icon__color">
               <small>Pay in store</small>
            </IconButton>
            <IconButton className="icon__color">
               <small>For Business</small>
            </IconButton>
         </div>
         <div className="header__right">
            <Link to="/signIn" style={{textDecoration: "none"}}>
               <IconButton className="icon__color">
                  <small>Sign In</small>
               </IconButton>
            </Link>
            <Link
               to="/getstarted"
               style={{ textDecoration: "none", color: "white" }}
            >
               <Button className="button" variant="contained">
                  Get Started
               </Button>
            </Link>
         </div>
      </div>
   );
}

export default Header;
