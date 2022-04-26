import React from "react";
import logoBackgroundBlue1 from "./logoBackgroundBlue1.png";
import { Button, InputAdornment } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import "./BusinessAccount.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { RoomOutlined } from "@material-ui/icons";
function BusinessAccount() {
   document.body.style.backgroundColor = "#2562f0";
   //    document.body.style.backgroundColor = "white";

   return (
      <div className="app">
         <div className="headerBusinessAccount">
            <Link to="/">
               <div className="header__left">
                  <img src={logoBackgroundBlue1} alt="error" />
               </div>
            </Link>

            <h2 id="business">Business Account</h2>
         </div>
         <div className="createAccount">
            <div className="businessAccount">
               <h1>Pays for Merchants</h1>
               <div className="businessAccountForm" id="abcd">
                  <input
                     type="text"
                     placeholder="Business Name"
                     class="firstName"
                  />
               </div>
               <div className="businessAccountForm">
                  <RoomIcon />
                  <input
                     type="text"
                     placeholder="&#xF002;"
                     class="lastName"
                  />
               </div>
               <div className="businessAccountForm">
                  <input type="text" placeholder="Email Address" class="" />
               </div>{" "}
               <div className="businessAccountForm">
                  <input type="text" placeholder="Phone Number" class="" />
               </div>{" "}
               <div className="businessAccountForm">
                  <input
                     type="text"
                     placeholder="Employer Identification Number"
                     class=""
                  />
               </div>{" "}
               <div class="userAgreement">
                  By continuing certify that I am 18 years of Age or older
                  <br />
                  and I agree to the{" "}
                  <a href="" style={{ textDecoration: "none" }}>
                     User Agreement
                  </a>{" "}
                  and{" "}
                  <a href="" style={{ textDecoration: "none" }}>
                     Privacy Policy.
                  </a>
               </div>
               <div className="businessAccountButtonDiv">
                  <Link
                     to="/businessAccount"
                     style={{ textDecoration: "none" }}
                  >
                     <Button
                        className="businessAccountButton"
                        variant="contained"
                     >
                        Continue
                     </Button>
                  </Link>
                  <div>
                     <a href="" style={{ textDecoration: "none" }}>
                        Already have an Account ?
                     </a>
                  </div>
               </div>
            </div>
         </div>
         <div class="copyright">
            Copyright &copy; 2021 Pays, Inc. All rights reserved. <br />
            Privacy Legal Contact
         </div>
         <br />
      </div>
   );
}

export default BusinessAccount;
