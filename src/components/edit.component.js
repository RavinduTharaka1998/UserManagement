import  React, {Component} from 'react';

import axios from 'axios';
import {Button, Form, FormControl, Navbar} from "react-bootstrap";
import logo from "../logo.jpg";
import {BrowserRouter as Router, Link} from "react-router-dom";


export default  class Edit extends  Component{


    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeCustomer_Type = this.onChangeCustomer_Type.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            address: '',
            nic:'',
            customer_type:'',
            phone:'',
            email:'',
            password:''
        }
    }

    componentDidMount() {
        alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/business/edit/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    address: res.data.address,
                    nic: res.data.nic,
                    phone: res.data.phone,
                    customer_type: res.data.customer_type,
                    email: res.data.email,
                    password: res.data.password
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }
    onChangeAddress(e){
        this.setState({
            address: e.target.value
        });
    }
    onChangeNIC(e){
        this.setState({
            nic: e.target.value
        });
    }
    onChangePhone(e){
        this.setState({
            phone: e.target.value
        });
    }
    onChangeCustomer_Type(e){
        this.setState({
            customer_type: e.target.value
        });
    }
    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        let Email = this.state.email;
        const obj ={
            name: this.state.name,
            address: this.state.address,
            nic: this.state.nic,
            phone: this.state.phone,
            customer_type: this.state.customer_type,
            email: this.state.email,
            password: this.state.password,
        };

        console.log('Update id '+this.props.match.params.id)
        axios.post('http://localhost:4000/business/update/'+this.props.match.params.id,obj)
            .then(res => console.log(res.data));
        this.props.history.push('/index/'+Email);
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
                                <Link to={'/index/:id'} className = "nav-link">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/logout'} className = "nav-link">Sign Out</Link>
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
                    <h3 className="text-center">Edit Your Bios</h3>
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
                            <input type = "submit" value = "Update Details" className="btn-primary"/>
                        </div>
                    </form>
                </div>
            </Router>
        )
    }
}