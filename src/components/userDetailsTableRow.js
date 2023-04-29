import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.deletesss = this.deletesss.bind(this);
    }
    deletesss(){
        axios.get('http://localhost:4000/user/deleteuser/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        alert("Your Accout Successfully Deleted....")
        window.location.replace('/');
    }
    render() {
        return (
            <div className='pro-details'>
            <table className="table table-striped">
               <tr>
                  <td style={{fontWeight:'bold'}}>full name</td>
                  <td>{this.props.obj.name}</td>
               </tr>
               <tr>
                  <td style={{fontWeight:'bold'}}>address</td>
                  <td>{this.props.obj.address}</td>
               </tr>
               <tr>
                  <td style={{fontWeight:'bold'}}>nic</td>
                  <td>{this.props.obj.nic}</td>
               </tr>
               <tr>
                  <td style={{fontWeight:'bold'}}>phone</td>
                  <td>{this.props.obj.phone}</td>
               </tr>
               <tr>
                  <td style={{fontWeight:'bold'}}>email</td>
                  <td>{this.props.obj.email}</td>
               </tr>
               <tr>
                  <td> <Link to={"/userEdit/"+this.props.obj._id} className="btn btn-success">Edit</Link></td>
                  <td><button onClick={this.deletesss} className="btn btn-danger">Delete Account</button></td>
               </tr>
            </table>
        </div>
        );
    }
}

export default TableRow;