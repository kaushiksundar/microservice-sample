import React from 'react';

import axios from 'axios';

import {Typography} from '@material-ui/core';

import { constructBaseURL } from './helpers/utils';

const PYTHON_SERVICE = "/api/python_libs";

export default class PythonService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tfVersion: null
        };
    }
    componentDidMount() {
        axios.get(constructBaseURL(PYTHON_SERVICE))
        .then(function (response) {
            console.log(response);
            this.setState({tfVersion: response.data.tensorflow_version})
        }.bind(this))
        
    }
    render() {
        return(
            <Typography style={{textAlign: 'center', marginTop: '50px'}} variant="h1">Tensoflow Version : {this.state.tfVersion}</Typography>
        );
    }
}