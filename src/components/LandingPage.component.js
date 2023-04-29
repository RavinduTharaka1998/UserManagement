import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormControl, Image, Nav, Navbar, Row} from "react-bootstrap";
import {BrowserRouter as Router, Link} from 'react-router-dom';

import logo from '../logo.jpg';
import Footer from './footer'


class LandingPage extends Component{

    render() {
        return(
            <div>
                <Router>

                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src={logo}
                                width="120"
                                height="120"
                                className="d-inline-block align-top"

                            />{''}
                            <h1 className="d-xl-inline text-center">Online Buy and Sell Shopping Store</h1>
                        </Navbar.Brand>
                    </Navbar>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="collapse navbar-collapse" id = "navbarSupportedContent">
                            <ul className="navbar-nav mr-auto font-weight-bold mr form-control-lg">

                                <li className="nav-item">
                                    <Link to={'/'} className = "nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/create'} className = "nav-link ">Registration</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={'/aboutUs'} className = "nav-link">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/aboutUs'} className = "nav-link">Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/aboutUs'} className = "nav-link">History</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/signIn'} className = "nav-link">Sign In</Link>
                                </li>

                            </ul>
                        </div>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                            <Button type="submit">Submit</Button>
                        </Form>
                    </nav>
                    <br/>

                </Router>
                <div>
                    <hr className="shadow-lg card-footer"/>
                </div>
                <Footer/>

            </div>
        );
    }
}

export default LandingPage;