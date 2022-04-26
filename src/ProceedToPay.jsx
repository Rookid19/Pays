import React from 'react'
import { Button } from "@material-ui/core";
import "./ProceedToPay.css"
import logoBackgroundBlue1 from './logoBackgroundBlue1.png'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsIcon from '@material-ui/icons/Settings';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function ProceedToPay() {
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
                    <div className="profileContinue">
                        <div><AccountCircleIcon style={{ fontSize: 90, color: "rgba(138,138,138,1)"}} /></div>
                        <div id="email">Johndoe@gmail.com</div>
                    </div>
                    <div className="profileNameContinue">
                         <div className="amountContinue">
                            $  <input id="inputAddFunds" type="number" placeholder="Amount" />
                         </div>
                         <span className="usd">USD</span>
                    </div>
                        {<textarea placeholder="  Add a message" rows="2" cols="40" name="comment" form="usrform">
                            
                        </textarea>}  
                    <div>
                    </div>
                </div>
                <Button className="buttonProceed" href="PaymentSuccessful" variant="contained">
                      Proceed to pay
                    </Button>
                    <div className="canceldiv">
                    <a href="" className="cancel">Cancel</a>
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

export default ProceedToPay
