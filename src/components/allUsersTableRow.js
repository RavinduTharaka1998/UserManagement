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
        //this.props.history.push('/index');
        alert("User Account Successfully Deleted....")
        window.location.replace('/adminHome');
    }
    render() {
        return (
           <tr>
               <td>
                   {this.props.obj.name}
               </td>
               <td>
                   {this.props.obj.address}
               </td>
               <td>
                   {this.props.obj.nic}
               </td>
               <td>
                   {this.props.obj.phone}
               </td>
               <td>
                   {this.props.obj.email}
               </td>
               <td>
                   <Link to={"/adminEditUser/"+this.props.obj._id} className="btn btn-success">Edit</Link>
                   {/* <br/><br/> */}  &nbsp;
                   <button onClick={this.deletesss} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}

export default TableRow;