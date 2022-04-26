import React from "react";
import logoBackgroundBlue1 from "./logoBackgroundBlue1.png";
import { Button } from "@material-ui/core";
import "./GetStarted.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function GetStarted() {
   document.body.style.backgroundColor = "#2562f0";

   return (
      <div>
         <div className="headerGetStarted">
            <Link to="/">
               <div className="header__left">
                  <img src={logoBackgroundBlue1} alt="error" />
               </div>
            </Link>

            <Link to="/sign<div><small>due to insuficients funds</small></div>In" style={{textDecoration:"none"}}>
               <Button className="buttonHeaderGetStarted" variant="contained" >
                  Sign In
               </Button>
            </Link>
         </div>

         <div className="account">
            <center className="c">
               <small>
                  <h3>
                     Pays is a secure, easy way to pay <br />
                     and get paid-sign up for free
                  </h3>
               </small>
            </center>

            <div className="center">
               <div className="personal">
                  <input type="radio" value="Male" name="gender" />
                  Personal Account
               </div>
               <div className="personalInfo">
                  Send and receive money with Pays. Start today <br /> By
                  setting up an account
               </div>
               <div className="business">
                  <input type="radio" value="Female" name="gender" />
                  Business Account
               </div>
               <div className="businessInfo">
                  Accept Pays and all cards online or the register <br />
                  Send secure invoices to your customers.
               </div>
            </div>
            <center>
               <Link
                  to="/personalAccount"
                  style={{ textDecoration: "none", color: "white" }}
               >
                  <Button className="button2" variant="contained">
                     Continue
                  </Button>
               </Link>
            </center>
         </div>
      </div>
   );
}

export default GetStarted;
