import React from 'react';
import './components/commmon/styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Start from './components/Start';
import Footer from './components/commmon/Footer';
import Header from './components/commmon/Header';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Claimsummary from './components/Claimsummary';
import Login from './components/Login';
import Update from './components/Update';
function App() {
  let x;
  return (
    <Router>
    <div className="App">
     <h1 className="title">Claim Management</h1>

     <div>
       <Switch>
        <Route exact path="/" component={Start}/>
         <Route exact path="/summary" component={Claimsummary}/>
         <Route exact path="/login" component={Login}/>
         <Route exact path="/update/:id"  component={Update}/>
       </Switch>
     </div>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
