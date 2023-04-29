import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from 'react-router-dom';


import signIn from './components/userSignin';
import signUp from './components/userRegistration';
import userProfile from './components/userProfile';
import userEdit from './components/userEditProfile';
import adminHome from './components/adminHome';
import adminEditUser from './components/adminEditUser';
import adminSearchUser from './components/adminSearchUser';

class App extends Component{

  render() {
    return(
        <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={signIn}/>
                        <Route exact path='/signUp' component={signUp}/>
                        <Route exact path='/userProfile/:id' component={userProfile}/>
                        <Route exact path='/userEdit/:id' component={userEdit}/>
                        <Route exact path='/adminHome' component={adminHome}/>
                        <Route exact path='/adminEditUser/:id' component={adminEditUser}/>
                        <Route exact path='/adminSearchUser/:id' component={adminSearchUser}/>
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;