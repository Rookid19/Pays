import React from 'react'
import { Button } from "@material-ui/core";
import "./PaymentSuccessful.css"
import logoBackgroundBlue1 from './logoBackgroundBlue1.png'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsIcon from '@material-ui/icons/Settings';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';


function AddFunds() {
    const [{ user }, dispatch] = useStateValue(); // we aint using the dispatch here
    const handleAuthentication = () => {
       if (user) {
          auth.signOut();
       }
    };
    document.body.style.backgroundColor = "rgb(239 239 239)";

    return (
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
            
            
            <div className="sendMainContinue"> 
                <div className="sendContinue">
                   <div className="paymentSuccessful">Payment Declined!<div><small>due to insuficients funds</small></div></div>
                   <ErrorOutlineIcon className="paymentIcon" style={{ fontSize: 150, color: "red"}} />
                </div>
                <Button href="userDashboard" className="buttonProceed" variant="contained">
                        Return to wallet
                    </Button>
                    <div className="canceldiv">
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
        
    )
}

export default AddFunds
