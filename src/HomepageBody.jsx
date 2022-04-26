import React from "react";
import { Button } from "@material-ui/core";
import "./HomepageBody.css";
import imagecrop from "./imagecrop.PNG";

function HomepageBody() {
   document.body.style.backgroundColor = "white";

   return (
      <div className="homepageBody">
         <div className="seamless">
            <h3>
               <small>
                  <div className="everyone">
                     Seamlessly made <br /> for everyone
                  </div>
                  <div className="send">
                     Send and receive money with anyone. Simply enter a <br />
                     phone number, Susertag or scan their QR <br /> code to pay
                  </div>
               </small>
            </h3>
            <br />
            <Button className="button" variant="contained">
               Get Pays
            </Button>
         </div>
         <div>
            <div className="payForPurchase">
               <div className="paysWallet">
                  <h3>
                     <br />
                     <div className="everyone">
                        Pay for purchases with <br /> your Pays wallet
                     </div>
                     <div className="send">
                        just like you pay your friends, you can also <br /> pay
                        your purchases using Pays wallet.
                     </div>
                  </h3>
                  <br />
                  <Button className="button1" variant="contained">
                     Learn more
                  </Button>
               </div>
               <div className="safe">
                  <h3>
                     <div className="everyone">Convenient, safe and fast.</div>{" "}
                     <br />
                     <div className="send">
                        Our easy-to-use smartphone App lets you <br /> send
                        money to family and friends with just <br /> few taps
                        and a debit card. Very safe and <br /> superfast. <br />{" "}
                        <br />
                        Cash out anytime you want <br /> Send & receive money
                        with few taps <br />
                        Bank on your Pays wallet
                     </div>
                  </h3>
                  <Button className="button211" variant="contained">
                     Learn more
                  </Button>
               </div>
            </div>
         </div>
         <div class="seamless">
            <div className="everyone">
               Make more with your money than <br /> just letting it sit in your
               wallet.
            </div>
            <div className="send">
               Let your money work for you. Pays is not just a digital <br />{" "}
               wallet, Fund your Crypto wallet from your account <br /> balance
               and start earning extra cash with <br /> no hussle. Yes, No
               hussle!
            </div>
            <br />

            <Button className="button" variant="contained">
               Get Pays
            </Button>
         </div>
         <div className="double">
            {/* <div className="image1">
               <img src={image1} alt="" height="400" width="700" />
            </div> */}
            <div>
               <img src={imagecrop} alt="" height="500" width="1000"></img>
            </div>
            {/* <div className="green">
               
            </div> */}
         </div>
         <br />
         <div className="seamless1">
            <div className="everyone">
               Accept Pays at your <br /> Business
            </div>
            <div className="send">
               Welcome your customers with more options <br /> to pay you.
               Integrate with Pays and start <br /> accepting payment ay your
               store.
            </div>
            <br />
            <Button className="button" variant="contained">
               Get started
            </Button>
         </div>
      </div>
   );
}

export default HomepageBody;
