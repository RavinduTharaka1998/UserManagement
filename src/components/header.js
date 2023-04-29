import React from 'react';
import {Button, Form, FormControl, Navbar} from "react-bootstrap";

import logo from "../logo.jpg";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

import App from "../App"
import Create from "./create.component";
import Edit from "./edit.component";
import AboutUs from "./index.component";
import Index from "./aboutus.component";
import SignIn from "./signin.component";



const Header = () =>{

    return(
      /*<Router>
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand className="">
                    <img
                        alt=""
                        src={logo}
                        width="120"
                        height="120"
                        className="d-inline-block align-top"
                    />{''}
                        <h1 className="d-xl-inline text-center">Online Shopping Store</h1>
                </Navbar.Brand>
            </Navbar>
            <hr className="card-link"/>
            <Navbar bg="dark" variant="dark"  sticky="top" collapseOnSelect expand="lg" >

                    <div className="collapse navbar-collapse" id = "navbarSupportedContent">
                        <br/>
                        <ul className="navbar-nav mr-auto navbar-brand navbar-collapse" >
                            <li className="nav-item">
                                <Link to={'/'} className = "nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/index'} className = "nav-link">Index</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/create'} className = "nav-link">Registration</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/about'} className = "nav-link">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/contactUs'} className = "nav-link">contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/signIn'} className = "nav-link">Sign In</Link>
                            </li>
                        </ul>
                    </div>


                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route exact path='/create' component={Create}/>
                <Route exact path='/edit/:id' component={Edit}/>
                <Route exact path='/index' component={Index}/>
                <Route exact path='/about' component={AboutUs}/>
                <Route exact path='/signIn' component={SignIn}/>
            </Switch>
        </div>
      </Router>*/


        <Router>
            <div>
                <div className="bg-info">
                    <img src = {logo} width ="100%" height="150" alt="logo image"/>
                    <h1 className="table-striped font-weight-bolder text-center">Online Buy & Sell</h1><br/>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <div className="collapse navbar-collapse" id = "navbarSupportedContent">
                        <ul className="navbar-nav mr-auto navbar-brand navbar-collapse" >
                            <li className="nav-item">
                                <Link to={'/'} className = "nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/index'} className = "nav-link">Index</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/create'} className = "nav-link">Registration</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/about'} className = "nav-link">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/signin'} className = "nav-link">Sign In</Link>
                            </li>
                        </ul>
                    </div>
                </nav><br/>
                <h2 className="text-center text-dark">Welcome to Our Online Shopping World</h2><br/>
                <Switch>
                    <Route exact path='/create' component={Create}/>
                    <Route exact path='/edit/:id' component={Edit}/>
                    <Route exact path='/index' component={Index}/>
                    <Route  path='/about' component={AboutUs}/>
                    <Route exact path='/signin' component={SignIn}/>
                </Switch>

                <div>
                    <hr className="shadow-lg card-footer"/>

                </div>
            </div>
        </Router>


    );
}
export default Header;