import React from "react";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { Link } from "@material-ui/core";
import "./UserDashboard.css"
import logoBackgroundBlue1 from './logoBackgroundBlue1.png'

import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsIcon from '@material-ui/icons/Settings';

function UserDashboard() {
   const [{ user }, dispatch] = useStateValue(); // we aint using the dispatch here

   const handleAuthentication = () => {
      if (user) {
         auth.signOut();
      }
   };
   document.body.style.backgroundColor = "white";


   return (
      // <Link to={!user && "/signIn"}>
      //    <div onClick={handleAuthentication}>
      //       <span id="hello">Hello {user ? user.email : "Guest"}</span>
      //       <span id="signIn" className="header__optionLinetwo">
      //          {user ? "sign Out" : "Sign In"}
      //       </span>
      //    </div>
      // </Link>
      <div>
           <div className="headerUserDashboard">
               <div className="logoDashboard">
               <a href="/"> <img src={logoBackgroundBlue1} alt="error" height="40"/></a>
               </div>
               <a href="">Wallet</a>
               <a href="">Activity</a>
               <a href="PersonalAccount">Support</a>
               <a href=""><NotificationsNoneIcon/></a>
               <a href="userProfile"><SettingsIcon/></a>
               <a href="signIn" onClick={handleAuthentication}>Log out</a>
      
                {/* <Link to={!user && "/signIn"} onClick={handleAuthentication} >hello</Link> */}

            </div>
            <div className="transaction">
                  <div >
                  <span className="userName">Hi, {user ? user.email:""}</span>
                  
                  </div>
               <div className="WithdrawAdd">
                  <a href=""  >Withdraw</a>
                  <a href="addFunds" id="addFunds">Add funds</a>  
               </div>
            </div>
            
            <div>
               <div className="balance">
                  <span> Your Account Balance is</span>
                  <div className="amount">$ 0.00</div>
                  <div className="sendRequest">
                     <a href="Send" id="send">Send</a>
                     <a href="Request">Request</a>
                  </div>
               </div>
            </div>
            <div id="recentTransactions">Recent Transactions</div>
                
            <div className="transactionMain">
               <div className="transactionHistory">
                  <div>
                     Padi 
                     <div className="date">May 4</div>
                  </div>
                  <div>
                     $ 30.00
                  </div>
                  
               </div>
               <div className="transactionHistory">
                  <div>
                     Padi 
                     <div className="date">May 4</div>
                  </div>
                  <div>
                     $ 30.00
                  </div>
                  
               </div>
               <div className="transactionHistory">
                  <div>
                     Padi 
                     <div className="date">May 4</div>
                  </div>
                  <div>
                     $ 30.00
                  </div>
                  
               </div>
               <div  className="view" >
                  <a id="viewAll" href="" >View all</a>
               </div>
            </div>
            <div class="copyrightUserDashboard">
               Copyright &copy; 2021 Pays, Inc. All rights reserved. <br />
             <div className="plcs">
                     <a href="">Privacy</a> 
                     <a href="">Legal</a>
                     <a href="">Contact</a>
                     <a href="">Security</a>
               </div>
         </div>
      </div>
   );
}

export default UserDashboard;
