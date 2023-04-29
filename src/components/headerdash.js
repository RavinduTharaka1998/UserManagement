import React from 'react';
import logo from "../logo.jpg";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Edit from "./edit.component";
import Index from "./index.component";
import AboutUs from "./aboutus.component";
import Dashboard from "../Dashboard";

const DashHeader = () =>{

    return(

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
                                <Link to={'../dashhome'} className = "nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'../index'} className = "nav-link">Index</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'../about'} className = "nav-link">About Us</Link>
                            </li>

                        </ul>
                    </div>
                </nav><br/>
                <h2 className="text-center text-dark">Welcome to Our Online Shopping World</h2><br/>
                <Switch>
                    <Route exact path='/dashhome' component={Dashboard}/>
                    <Route exact path='/edit/:id' component={Edit}/>
                    <Route exact path='/index' component={Index}/>
                    <Route  path='/about' component={AboutUs}/>
                </Switch>

                <div>
                    <hr className="shadow-lg card-footer"/>

                </div>
            </div>
        </Router>
    );
}
export default DashHeader;