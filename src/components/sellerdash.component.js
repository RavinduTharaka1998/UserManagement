import  React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Button, Form, FormControl, Navbar} from "react-bootstrap";

import Profile from './buyerprofile.component'

import logo from "../logo.jpg";

export default  class SellerDash extends  Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <p>This is Seller Dashboard</p>
                <Router>

                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="collapse navbar-collapse" id = "navbarSupportedContent">
                            <ul className="navbar-nav mr-auto font-weight-bold mr form-control-lg">
                                <li className="nav-item">
                                    <Link to={'/BuyerDash'} className = "nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/index/:id'} className = "nav-link">Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/logout'} className = "nav-link ">LogOut</Link>
                                </li>

                            </ul>
                        </div>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                            <Button type="submit">Submit</Button>
                        </Form>
                    </nav>
                    <br/>
                    <Switch>

                        <Route exact path='/profile' component={Profile}/>

                    </Switch>
                </Router>
            </div>

        );
    }
}