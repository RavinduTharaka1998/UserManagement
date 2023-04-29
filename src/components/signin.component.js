import  React, {Component} from 'react';
import axios from 'axios';
import {Button, Form, FormControl, Navbar} from "react-bootstrap";
import logo from "../logo.jpg";
import {BrowserRouter as Router, Link} from "react-router-dom";

export default  class SignIn extends  Component{
    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeCustomer_Type = this.onChangeCustomer_Type.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email:'',
            password:'',
            customer_type:''
        }
    }
    onChangeEmail(e){
        this.setState( {
            email: e.target.value
        });
    }
    onChangePassword(e){
        this.setState( {
            password: e.target.value
        });
    }
    onChangeCustomer_Type(e){
        this.setState( {
            customer_type: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const Email = this.state.email;
        let object = {
            email : this.state.email,
            password : this.state.password,
            customer_type : this.state.customer_type
        };
        console.log('mail '+this.state.email);
        console.log('pass '+this.state.password);
        console.log('type '+this.state.customer_type);
        if(this.state.customer_type === "Buyer"){
            axios.post('http://localhost:4000/business/loginbuyer',object)
                .then(res => {
                    if(res.data.message === "Successful Login"){
                        alert(res.data.message)
                        alert(Email)
                        this.props.history.push('/index/'+Email);
                    }
                    else{
                        alert(res.data.message)
                        //window.open('/signIn')
                        this.props.history.push('/signIn');
                    }

                });
        }
        else if(this.state.customer_type === "Seller"){
            axios.post('http://localhost:4000/business/loginseller',object)
                .then(res => {
                    if(res.data.message === "Successful Login"){
                        alert(res.data.message)
                        this.props.history.push('/index/'+Email);
                    }
                    else{
                        alert(res.data.message)
                        //window.open('/signIn')
                        this.props.history.push('/signIn');
                    }

                });
        }else{
            alert('Invalid User Type..!')
        }


        this.setState({
            email :'',
            password :'',
            customer_type :''
        })
    }

    render() {
        return(
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
                        <h1 className="d-xl-inline">Online Buy and Sell Shopping Store</h1>
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
                <div className="container" style={{marginTop:10}}>
                    <h3 className="text-center">Sign In</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username :</label>
                            <input type ="text" className="form-control" placeholder="raone@gmail.com" value={this.state.email} onChange = {this.onChangeEmail}/>
                        </div>
                        <div className="form-group">
                            <label>Password :</label>
                            <input type ="password" className="form-control" placeholder="********" value={this.state.password} onChange = {this.onChangePassword}/>
                        </div>
                        <div className="form-group">
                            <label>Your Type :</label>
                            <input type ="text" className="form-control" placeholder="Seller or Buyer" value={this.state.customer_type} onChange = {this.onChangeCustomer_Type}/>
                        </div>

                        <div className="form-group">
                            <input type = "submit" value = "Sign In" className="btn-primary"/>
                        </div>
                    </form>
                 </div>
            </Router>
        )
    }
}
