import React, { Component } from 'react';


import CssBaseline from '@material-ui/core/CssBaseline';


import {BrowserRouter as Router, Route} from 'react-router-dom';

import Welcome from './Welcome';
import Heroes from './Heroes';
import PythonService from './PythonService';

import Header from './components/Header';

export default class App extends Component {

    render() {
        return (<div>
            <CssBaseline />
    
        <Router>
            <div>
                <Header />
                <Route path="/" exact component={Welcome} />
                <Route path="/movie-hero" component={Heroes} />
                <Route path="/python-service" component={PythonService} />
            </div>
        </Router>
        </div>)
    }
}