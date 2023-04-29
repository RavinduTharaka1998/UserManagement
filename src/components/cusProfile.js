import  React, {Component} from 'react';
import axios from 'axios'
import TableRow from './cusDetailsTableRow';

import './css/profile.css';
import Footer from './footer';

export default  class CusProfile extends  Component{


    constructor(props) {
        super(props);
        this.state = {customers : []};
        this.state.Email = this.props.match.params.id;

        //const Email = this.props.match.params.id;
    }

    componentDidMount() {
        // alert('email is ' +this.props.match.params.id);
        axios.get('http://localhost:4000/trainFood/'+this.props.match.params.id)
            .then(response => {
                // alert('Pass una')
                // alert('Data Tika :'+response.data)
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
                <div>
                     <div class="sidebar">
                        <a href= {"/index/" +this.props.match.params.id}>Home</a>
                        <a href={"/myorder/" +this.props.match.params.id}>My Orders</a>
                        <a href="/about">About Us</a>
                        <a href="/contact">Contact Us</a>
                        <a href={"/cusprofile/"+this.props.match.params.id}>Profile</a>
                        <a href="/">SignOut</a>

                        <div className='inner-menu'>
                            <a href="/signin">Terms & Condition</a>
                            <a href="/about">Setting</a>
                            <a href="/contact">More</a>
                        </div>
                    </div>

                    <div class="content">
                        <h2 className= 'tittle'>Fast Food</h2>

                        <br/>
                        <h3 align="center">My Profile</h3>
                       
                        <div className='profile-top'>
                            <div className='left-details'>
                                    <h3>Your Profile Details</h3>
                                    <h5>You can edit or delete your profile details in here....</h5>
                                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrUvZm16nnAMpUqAvX3N2kODMuxJbXXCJVQg&usqp=CAU"/>
                            </div>
                            <div className='right-details'>
                                {this.tabRow()}
                            </div>
                        </div>


                        <br/><br/><br/>       
                        <hr/>                 
                        <div className='top-footer'>
                            <div className='col-img'>
                                <img src = "https://limitlessspice.com/wp-content/uploads/2022/02/kottu-g734b601c4_1920.jpg" width="400"/>
                                <h4>Koththu</h4>
                                <h4>Rs 1000/=</h4>
                            </div>
                            <div className='col-img'>
                                <img src = "https://cdn.chinesedragoncafe.com/media/catalog/product/cache/1/image/988x988/9df78eab33525d08d6e5fb8d27136e95/r/i/rice-with-shrimp-_-chicken.jpg" width="475"/>
                                <h4>Mix Rice</h4>
                                <h4>Rs 900/=</h4>
                            </div>
                            <div className='col-img'>
                                <img src = "https://static.onecms.io/wp-content/uploads/sites/43/2023/01/12/270770-garlic-noodles-ddmfs-4x3-0189.jpg" width="" height=""/>
                                <h4>Noodles</h4>
                                <h4>Rs 1200/=</h4>
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