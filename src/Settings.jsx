import React from 'react'
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import logoBackgroundBlue1 from './logoBackgroundBlue1.png'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "./Settings.css"
function Settings() {
    const [{ user }, dispatch] = useStateValue(); // we aint using the dispatch here

    const handleAuthentication = () => {
       if (user) {
          auth.signOut();
       }
    };
    document.body.style.backgroundColor = "rgba(246,246,246,1)";
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
               <a href="signIn" onClick={handleAuthentication}>Log out</a>
                {/* <Link to={!user && "/signIn"} onClick={handleAuthentication} >hello</Link> */}
            </div>

            <div className="testing">
                <div className="testLeft">
                    
                        <div className="profileMain">
                            <div className="profile">
                            <div id="textProfile">Profile</div>
                                <div><AccountCircleIcon style={{ fontSize: 90, color: "rgba(138,138,138,1)"}} /></div>
                            </div>
                            <div className="profileName">
                                <div id="userName">John Doe</div>
                                <div className="datejoined">Joined August 2020</div>
                            </div>
                            <a href="" className="profileUpdate">Update</a>
                        </div>
                     
                    
                        <div className="personalMain">  
                            <div id="personalProfile">Personal</div>
                            <div className="address">
                                <div>
                                    Address
                                    <div className="subPersonal">
                                        2011 Adenta Rd <br />
                                        Miami, FL17033
                                    </div>
                                </div>
                                <a href="" className="addressUpdate">Update</a>
                            </div>
                            <div className="phone">
                                <div>
                                    Phone
                                    <div className="subPersonal">
                                        (717) 000-1111
                                    </div>
                                </div>
                                <a href="" className="phoneUpdate">Update</a>
                            </div>
                            <div className="email">
                                <div>
                                    Email
                                    <div className="subPersonal">
                                        randyodoom19@gmail.com
                                    </div>
                                </div>
                                <a href="" className="emailUpdate">Update</a>
                            </div>
                        </div>
                    
                     </div>   
                    <div className="paymentMethod">
                            <div className="paymentMethodName">
                                Payment methods
                            </div>
                            <a href="" className="addBank">
                                Add bank/card
                            </a>

                                <div className="banksAdded">
                                    <div className="creditCardBorder">
                                        <div className="creditCard">
                                            <div className="creditCardName">
                                                    <div> J.P  Morgan Chase</div>
                                                    <div>Debit 1001</div>
                                            </div>
                                            <a href="" className="creditCardRemove">
                                                Remove
                                            </a>
                                        </div>
                                    </div>
                                     
                                </div>
                                <div className="banksAdded">
                                    <div className="creditCardBorder">
                                        <div className="creditCard">
                                            <div className="creditCardName">
                                                    <div> J.P  Morgan Chase</div>
                                                    <div>Checking ****20</div>
                                            </div>
                                            <a href="" className="creditCardRemove">
                                                Remove
                                            </a>
                                        </div>
                                    </div>
                                     
                                </div>
                                
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

export default Settings
