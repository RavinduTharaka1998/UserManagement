import  React, {Component} from 'react';
import axios from 'axios';


import './css/LandingPage.css';
import Footer from './footer';


export default  class AdminEditUser extends  Component{


    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangecPassword = this.onChangecPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            address: '',
            nic:'',
            phone:'',
            email:'',
            password:'',
            cpassword:''
        }
    }

    componentDidMount() {
        // alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/user/edituser/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    address: res.data.address,
                    nic: res.data.nic,
                    phone: res.data.phone,
                    email: res.data.email,
                    password: res.data.password
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }

    onChangeName(e){
        this.setState( {
           name: e.target.value
        });
    }
    onChangeAddress(e){
        this.setState( {
            address: e.target.value
        });
    }
    onChangeNIC(e){
        this.setState( {
            nic: e.target.value
        });
    }
    onChangePhone(e){
        this.setState( {
            phone: e.target.value
        });
    }

    onChangeEmail(e){

            this.setState({
                email: e.target.value
            });
    }
    onChangePassword(e){
        this.setState( {
            password: e.target.value
        });
    }
    onChangecPassword(e){
        this.setState( {
            cpassword: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        
        const obj ={
            name: this.state.name,
            address: this.state.address,
            nic: this.state.nic,
            phone: this.state.phone,
            campusid: this.state.campusid,
            email: this.state.email,
            password: this.state.password,
        };

        console.log('Update id '+this.props.match.params.id);
        const lastelement = this.state.nic.charAt(this.state.nic.length - 1);
        if(this.state.password ===  this.state.cpassword){
            if(this.state.password.length >= 8){
                if(this.state.phone.length === 10){
                    if(this.state.nic.length === 10){
                        if(lastelement === 'V' || lastelement === 'v'){
                            axios.post('http://localhost:4000/user/updateuser/'+this.props.match.params.id,obj)
                                .then(res => console.log(res.data));
                            // this.props.history.push('/index/'+CampusID);
                            alert('Your Account Details successfully Updated... Pleace Login again...');
                            this.props.history.push('/adminHome');
                        } 
                        else {
                            alert('Invalid NIC Number.. Pleace enter "V" for nic.');
                        }
                    } 
                    else {
                        alert('Invalid NIC Number.. Pleace enter 10 digits for nic.');
                    }
                }
                else{
                    alert('Invalid phone number.. Pleace enter 10 numbers for contact number.');
                }
            } 
            else {
                alert('Pleace enter at least 8 characters for passwords.');
            }
        }else{
            alert('Your password and confirm password are miss match... Pleace enter same passwords');
        }
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
                    <h2 className= 'tittle'>User Management System</h2>
                    <br/>
                    <div className="container " style={{marginTop:10}}>
                        <h3 className="text-center" style={{borderBottom:'tomaato solid'}}>Edit User</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Name :</label>
                                <input type ="text" required placeholder = "Please enter name" className="form-control" value={this.state.name} onChange = {this.onChangeName}/>
                            </div>
                            <div className="form-group">
                                <label>Address :</label>
                                <input type ="text" required placeholder = "Please enter address" className="form-control" value={this.state.address} onChange = {this.onChangeAddress}/>
                            </div>
                            <div className="form-group">
                                <label>NIC :</label>
                                <input type ="text" required placeholder = "Please enter NIC" className="form-control" value={this.state.nic} onChange = {this.onChangeNIC}/>
                            </div>
                            <div className="form-group">
                                <label>Phone Number :</label>
                                <input type ="number" required placeholder = "Please enter contact number" className="form-control" value={this.state.phone} onChange = {this.onChangePhone}/>
                            </div>
                            <div className="form-group">
                                <label>eMail Address :</label>
                                <input type ="email" readOnly required placeholder = "Please enter email" className="form-control" value={this.state.email} onChange = {this.onChangeEmail}/>
                            </div>
                            <div className="form-group">
                                <label>Password :</label>
                                <input type ="password" required placeholder = "Please enter Password" className="form-control" value={this.state.password} onChange = {this.onChangePassword}/>
                            </div>
                            <div className="form-group">
                                <label>Confirm Password :</label>
                                <input type ="password" required placeholder = "Re-Type Password" className="form-control" value={this.state.cpassword} onChange = {this.onChangecPassword}/>
                                <span>( At least 8 characters )</span>
                            </div>

                            <div className="form-group">
                                <input type = "submit" value = "Update User" className="btn btn-dark"/>
                            </div>
                        </form>
                    </div>
                    <br/>
                    <br/>
                    <hr/>
                    <Footer/>
                    <hr/>
                    <br/>
                </div>
            </div>
        )
    }
}