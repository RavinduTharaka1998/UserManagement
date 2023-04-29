import  React, {Component} from 'react';
import axios from 'axios';

import Footer from './footer';
import './css/LandingPage.css';

export default  class SignIn extends  Component{
    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email:'',
            password:''
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

    onSubmit(e){
        e.preventDefault();


        const Email = this.state.email;
        let object = {
            email : this.state.email,
            password : this.state.password
        };

        if ((this.state.email === "admin") && (this.state.password === "adminMatara")) {
             const Station = "Matara";
             this.props.history.push('/adminhome/'+Station);

        }
        else if ((this.state.email === "admin") && (this.state.password === "adminGalle")) {

            const Station = "Galle";
            this.props.history.push('/adminhome/'+Station);

       }
       else if ((this.state.email === "admin") && (this.state.password === "adminColombo")) {

        const Station = "Colombo";
        this.props.history.push('/adminhome/'+Station);

       }else {
            axios.post('http://localhost:4000/user/login',object)
                .then(res => {
                    if(res.data.message === "Successful Login"){
                        // alert(res.data.message)
                        // alert(Email)
                        this.props.history.push('/index/'+Email);
                    }
                    else{
                        // alert(res.data.message)
                        this.props.history.push('/signIn');
                    }

                });
        }
        

    }

    render() {
        return(
            <div>
                <div class="sidebar">
                    <a href="/">Home</a>
                    <a href="/signUp">New Customer</a>
                    <a href="/">SignIn</a>
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact Us</a>

                    <div className='inner-menu'>
                        <a href="/signin">Terms & Condition</a>
                        <a href="/about">Setting</a>
                        <a href="/contact">More</a>
                    </div>
                </div>
                <div class="content">
                    <h2 className= 'tittle'>User Management System</h2>
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
                                <input type = "submit" value = "Sign In" className="btn btn-dark"/>
                            </div>
                        </form>
                    </div>
                    <br/>
                    <div className='top-footer'>
                        <div className='col-img'>
                            <img src = "https://thumbs.dreamstime.com/b/document-management-system-dms-businessman-hold-user-icon-software-archiving-searching-managing-corporate-files-223050643.jpg" width="400"/>
                        </div>
                        <div className='col-img'>
                            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIJvE8ios-afexl26eDYclI79eTv7sph1hiaq_5e91Qebc2bXQwN4LjC6VnvWfg7xnxh4&usqp=CAU" width="475"/>
                        </div>
                        <div className='col-img'>
                            <img src = "https://www.loginradius.com/blog/static/3d1a7f9993b6334444b52ae84a06f852/d3746/user-mngmnt.jpg" width="" height=""/>
                        </div>
                    </div>
                     
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
