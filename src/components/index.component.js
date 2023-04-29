import  React, {Component} from 'react';
import axios from 'axios'
import TableRow from './TableRow';
import {Button, Form, FormControl, Navbar} from "react-bootstrap";
import logo from "../logo.jpg";
import {BrowserRouter as Router, Link} from "react-router-dom";

export default  class Index extends  Component{


    constructor(props) {
        super(props);
        this.state = {customers : []};
        this.state.Email = this.props.match.params.id;

        //const Email = this.props.match.params.id;
    }

    componentDidMount() {
        alert('email is ' +this.props.match.params.id);
        axios.get('http://localhost:4000/business/'+this.props.match.params.id)
            .then(response => {
                alert('Pass una')
                alert('Data Tika :'+response.data)
                this.setState({customers : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }
    tabRow(){
            return <TableRow obj={this.state.customers}/>
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
                                    <Link to={'/BuyerDash/'+this.state.Email} className = "nav-link">Home</Link>
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

                <h3 align="center">My Profile</h3>
                <table className="table table-striped" style = {{marginTop :20}}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>NIC</th>
                        <th>Phone Number</th>
                        <th>Customer Type</th>
                        <th>eMail</th>
                        <th>Password</th>
                        <th colSpan="2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.tabRow()}
                    </tbody>
                </table>
             </Router>
        );
    }
}