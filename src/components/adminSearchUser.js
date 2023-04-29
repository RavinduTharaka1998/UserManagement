import  React, {Component} from 'react';
import axios from 'axios'
import UserTableRow from './allUsersTableRow';
import jsPDF from "jspdf";
import 'jspdf-autotable';

import './css/profile.css';
import Footer from './footer';

export default  class AdminSearchUser extends  Component{


    constructor(props) {
        super(props);
        this.state = {users : []};

    }

    componentDidMount() {
        // alert('email is ' +this.props.match.params.id);
        axios.get('http://localhost:4000/user/adminsearchuser/'+this.props.match.params.id)
            .then(response => {
                // alert('Pass una')
                // alert('Data Tika :'+response.data)
                this.setState({users : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return <UserTableRow obj={this.state.users}/>
    }

    
    render() {
        return(
                <div>
                    <div class="sidebar">
                    <a href="/adminHome">Home</a>
                    <a href="/adminHome">Feedback</a>
                    <a href="/adminHome">Employee</a>
                    <a href="/adminHome">About Us</a>
                    <a href="/adminHome">Contact Us</a>
                    <a href="/">SignOut</a>

                    <div className='inner-menu'>
                        <a href="/adminHome">Terms & Condition</a>
                        <a href="/adminHome">Setting</a>
                        <a href="/adminHome">More</a>
                    </div>
                </div>

                    <div class="content">
                        <div className = "top-tittle-bar">
                            <h2 className= 'tittle'>User Management System</h2>
                            <from style ={{float:'right',display:'flex',gap:5}} onSubmit={this.onSubmit}>
                                <div className="form-group" style ={{float:'right'}}>
                                    <a href ={"/adminHome"} style ={{float:'right',background:'#313332',padding:7,borderRadius:5,color:'white',textDecoration:'none'}}>Go Back</a>
                                </div>
                            </from>
                        </div>
                        <br/><br/><br/>
                        <h3 align="center">Search Customer Details</h3>
                       

                        <table className="table table-striped" style = {{marginTop :20}}>
                            <thead>
                                <tr>
                                    {/* <th>id</th> */}
                                    <th>User Name</th>
                                    <th>Address</th>
                                    <th>NIC</th>
                                    <th>Contact Number</th>
                                    <th>e-Mail</th>
                                    <th colSpan="3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.tabRow()}
                            </tbody>
                        </table>

                        
                        <br/>      
                        <hr/>     
                        <br/>
                        <hr/>
                        <Footer/>
                        <hr/>
                        <br/>
                        </div>
                </div>
        );
    }
}