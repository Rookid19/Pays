import React from 'react'
import { Button } from "@material-ui/core";
import "./Send.css"
import logoBackgroundBlue1 from './logoBackgroundBlue1.png'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsIcon from '@material-ui/icons/Settings';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";




function Send() {
    const [{ user }, dispatch] = useStateValue(); // we aint using the dispatch here
    const handleAuthentication = () => {
       if (user) {
          auth.signOut();
       }
    };
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
            
            <div className="">
                <a href="Send" className="requestMoney">Send money</a> <br/>
            </div>
            <div className="sendMain"> 
                <div className="sendMoney">Request money from :</div>
                <input type="text" placeholder="Name, email, username or phone number" />
                <div>
                <Button href="ProceedToPay" className="button" variant="contained">
                      Next
                </Button>   
                </div>
            </div>
        </div>
    )
}

export default Send
