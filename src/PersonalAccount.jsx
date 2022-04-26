import React, { useState } from "react";
import logoBackgroundBlue1 from "./logoBackgroundBlue1.png";
import { Button } from "@material-ui/core";
import "./personalAccount.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
function PersonalAccount() {
   const history = useHistory();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   // const [password2, setPassword2] = useState("");

   const signUp = (e) => {
      e.preventDefault();
      auth
         .createUserWithEmailAndPassword(email, password)
         .then((auth) => {
            console.log(auth);
            if (auth) {
               history.push("/userDashboard");
            }
         })
         .catch((error) => alert(error.message));
   };

   document.body.style.backgroundColor = "#2562f0";
   //    document.body.style.backgroundColor = "white";

   return (
      <div className="app">
         <div className="headerPersonalAccount2">
            <Link to="/">
               <div className="header__left">
                  <img src={logoBackgroundBlue1} alt="error" />
               </div>
            </Link>

            <h2 id="personal">Personal Account</h2>
         </div>
         <div className="createAccount">
            <div className="personalAccount">
               <h1>Create your account</h1>
               <div className="personalAccountForm" id="abcd">
                  <input
                     type="text"
                     placeholder="First Name"
                     class="firstName"
                  />
               </div>
               <div className="personalAccountForm">
                  <input type="text" placeholder="Last Name" class="lastName" />
               </div>
               <div className="personalAccountForm">
                  <input
                     type="text"
                     value={email}
                     placeholder="Email"
                     class=""
                     onChange={(e) => setEmail(e.target.value)}
                  />
               </div>{" "}
               <div className="personalAccountForm">
                  <input
                     type="password"
                     value={password}
                     placeholder="Create Password"
                     class=""
                     onChange={(e) => setPassword(e.target.value)}
                  />
               </div>{" "}
               {/* <div className="personalAccountForm">
                  <input
                     type="text"
                     value={password2}
                     placeholder="Confirm Password"
                     class=""
                     onChange={(e) => setPassword(e.target.value)}
                  />
               </div>{" "} */}
               <div className="personalAccountForm">
                  <input type="text" placeholder="Mobile Number" class="" />
               </div>
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
               <div className="personalAccountButtonDiv">
                  <Link
                     to="/businessAccount"
                     style={{ textDecoration: "none" }}
                  >
                     <Button
                        className="personalAccountButton"
                        variant="contained"
                        type="submit"
                        onClick={signUp}
                     >
                        Continue
                     </Button>
                  </Link>
                  <div>
                     <Link to="/signIn" style={{ textDecoration: "none" }}>
                        <a href="" style={{ textDecoration: "none" }}>
                           Already have an Account ?
                        </a>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
         <div class="copyright">
            Copyright &copy; 2021 Pays, Inc. All rights reserved. <br />
            <a href="">Privacy</a> 
           <a href="">Legal</a>
           <a href="">Contact</a>
         </div>
         <br />
      </div>
   );
}

export default PersonalAccount;
