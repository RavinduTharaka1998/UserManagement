import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from 'react-router-dom';


import signIn from './components/signin';
import signUp from './components/userRegistration';



class App extends Component{

  render() {
    return(
        <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={signIn}/>
                        <Route exact path='/signUp' component={signUp}/>
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;