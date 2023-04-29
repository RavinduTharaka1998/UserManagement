import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.deletesss = this.deletesss.bind(this);
    }
    deletesss(){
        axios.get('http://localhost:4000/business/delete/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
    }
    render() {
        return (
           <tr>
               <td>
                   {this.props.obj._id}
               </td>
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
                   {this.props.obj.customer_type}
               </td>
               <td>
                   {this.props.obj.email}
               </td>
               <td>
                   {this.props.obj.password}
               </td>
               <td>
                   <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>

               </td>
               <td>
                   <td><button onClick={this.deletesss} className="btn btn-primary">Delete Account</button></td>

               </td>
           </tr>
        );
    }
}

export default TableRow;