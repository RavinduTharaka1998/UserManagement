import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Button, Form, FormControl, Navbar} from "react-bootstrap";
import logo from "../logo.jpg";
import Create from "./create.component";
import Edit from "./edit.component";
import Index from "./index.component";
import AboutUs from "./index.component";
import Dash from "./buyerdash.component";

export default  class SignIn extends  Component{
    render() {
        return (

        <Router>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id = "navbarSupportedContent">
                    <ul className="navbar-nav mr-auto font-weight-bold mr form-control-lg">
                        <li className="nav-item">
                            <Link to={'/BuyerDash'} className = "nav-link">DashBoard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/profile'} className = "nav-link">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/logout'} className = "nav-link">Log Out</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <br/>
            <Switch>
                <Route exact path='/create' component={Create}/>
                <Route exact path='/edit/:id' component={Edit}/>
                <Route exact path='/index' component={Index}/>
                <Route exact path='/aboutUs' component={AboutUs}/>
                <Route exact path='/signIn' component={SignIn}/>
                <div>
                    <Route path='/dash' new component={Dash}/>
                </div>

            </Switch>

            <div>
                <div className="container" style={{marginTop:10}}>
                    <h3 className="text-center">Edit Your Business</h3>
                    <form onSubmit={this.onSubmit} className="form-control-plaintext">
                        <div className="form-group">
                            <label>Name :</label>
                            <input type ="text" className="form-control"  value={this.state.name} onChange = {this.onChangeName}/>
                        </div>
                        <div className="form-group">
                            <label>Address :</label>
                            <input type ="text" className="form-control"  value={this.state.address} onChange = {this.onChangeAddress}/>
                        </div>
                        <div className="form-group">
                            <label>NIC :</label>
                            <input type ="text" className="form-control" value={this.state.nic} onChange = {this.onChangeNIC}/>
                        </div>
                        <div className="form-group">
                            <label>Phone Number :</label>
                            <input type ="text" className="form-control" value={this.state.phone} onChange = {this.onChangePhone}/>
                        </div>
                        <div className="form-group">
                            <label>Your Type :</label>
                            <input type ="text" className="form-control" value={this.state.customer_type} onChange = {this.onChangeCustomer_Type}/>
                        </div>
                        <div className="form-group">
                            <label>email Address :</label>
                            <input type ="text" className="form-control" value={this.state.email} onChange = {this.onChangeEmail}/>
                        </div>
                        <div className="form-group">
                            <label>Password :</label>
                            <input type ="text" className="form-control" value={this.state.password} onChange = {this.onChangePassword}/>
                        </div>

                        <div className="form-group">
                            <input type = "submit" value = "Go to Update" className="btn-primary"/>
                        </div>
                    </form>
                </div>
            </div>

        </Router>
        )
    }
}
