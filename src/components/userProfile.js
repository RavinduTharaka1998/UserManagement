import  React, {Component} from 'react';
import axios from 'axios'
import TableRow from './userDetailsTableRow';

import './css/profile.css';
import Footer from './footer';

export default  class UserProfile extends  Component{


    constructor(props) {
        super(props);
        this.state = {users : []};
        this.state.Email = this.props.match.params.id;

        //const Email = this.props.match.params.id;
    }

    componentDidMount() {
        // alert('email is ' +this.props.match.params.id);
        axios.get('http://localhost:4000/user/'+this.props.match.params.id)
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
            return <TableRow obj={this.state.users}/>
    }

    render() {
        return(
                <div>
                     <div class="sidebar">
                        <a href= {"/userProfile/" +this.props.match.params.id}>Home</a>
                        <a href={"/userProfile/" +this.props.match.params.id}>My Orders</a>
                        <a href="/">About Us</a>
                        <a href="/">Contact Us</a>
                        <a href={"/cusprofile/"+this.props.match.params.id}>Profile</a>
                        <a href="/">SignOut</a>

                        <div className='inner-menu'>
                            <a href="/">Terms & Condition</a>
                            <a href="/">Setting</a>
                            <a href="/">More</a>
                        </div>
                    </div>

                    <div class="content">
                        <h2 className= 'tittle'>User Management System</h2>

                        <br/>
                        <h3 align="center">My Profile</h3>
                        <hr/>
                        <div className='profile-top'>
                            <div className='left-details'>
                                    <h3>Your Profile Details</h3>
                                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1PltbrZER_wll6oxzmKendF9e2kchbe-rkTBwTVWRu9xpU2YwetnH_pFNSOrzuHuU_Zo&usqp=CAU"/>
                            </div>
                            <div className='right-details'>
                                {this.tabRow()}
                            </div>
                        </div>
                        <hr/>
                        <hr/>                 
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
        );
    }
}