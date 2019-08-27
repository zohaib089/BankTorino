import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Login from './components/auth/Login.js';
import Home from './components/pages/Home/Home.jsx';
import AboutUs from './components/pages/AboutUs.jsx';
import Personal from './components/pages/Personal.jsx';
import Careers from './components/pages/Careers.jsx';
import Loans from './components/pages/Loans.jsx';
import Register from './components/auth/Register.js';
import NotFound from './components/pages/NotFound.jsx';
import NavbarLayOut from './components/pages/Home/Navbar.jsx';
import Footer from './components/pages/Footer';


function App() {

  return (
    <React.Fragment>
      <NavbarLayOut />
      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/personal" component={Personal} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/careers" component={Careers} />
        <Route exact path="/loans" component={Loans} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </React.Fragment>



  );
}

export default App;
