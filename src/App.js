import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import HomepageBody from "./HomepageBody";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GetStarted from "./GetStarted";
import BusinessAccount from "./BusinessAccount";
import PersonalAccount from "./PersonalAccount";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import UserDashboard from "./UserDashboard";
import SignIn from "./SignIn";
import Settings from "./Settings";
import Send from "./Send";
import Request from "./Request";
import ProceedToPay from "./ProceedToPay";
import AddFunds from "./AddFunds";
import PaymentSuccessful from "./PaymentSuccessful"
import RequestSuccessful from "./RequestSuccessful"
import PaymentDeclined from "./PaymentDeclined"
import RequestDeclined from "./RequestDeclined"




function App() {
   const [{}, dispatch] = useStateValue();

   useEffect(() => {
      //will only run once when the app component loads

      auth.onAuthStateChanged((authUser) => {
         console.log("The USER is >>>> ", authUser);

         if (authUser) {
            // the user just logged in / the user was logged in
            dispatch({
               type: "SET_USER",
               user: authUser,
            });
         } else {
            // the user is logged out
            dispatch({
               type: "SET_USER",
               user: null,
            });
         }
      });
   }, []);
   return (
      
      <Router>
         <div className="app">
            <Switch>
            <Route path="/paymentdeclined">
                  <PaymentDeclined/>
            </Route>
            <Route path="/requestdeclined">
                  <RequestDeclined/>
            </Route>
            <Route path="/requestsuccessful">
                  <RequestSuccessful/>
            </Route>
            <Route path="/paymentsuccessful">
                  <PaymentSuccessful/>
            </Route>
            <Route path="/addFunds">
                  <AddFunds/>
            </Route>
            <Route path="/proceedtopay">
                  <ProceedToPay/>
            </Route>
            <Route path="/request">
                  <Request/>
            </Route>
            <Route path="/send">
                  <Send/>
               </Route>
               <Route path="/userProfile">
                  <Settings/>
               </Route>
               <Route path="/signIn">
                  <SignIn />
               </Route>
               <Route path="/userDashboard">
                  <UserDashboard />
               </Route>
               <Route path="/businessAccount">
                  <BusinessAccount />
               </Route>
               <Route path="/personalAccount">
                  <PersonalAccount />
               </Route>
               <Route path="/getstarted">
                  <GetStarted />
               </Route>
               <Route path="/">
                  <Header />
                  <HomepageBody />
               </Route>
            </Switch>
         </div>
      </Router>
   );
}

export default App;
