import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom';

const HomeLink = props => <Link to="/" {...props} />
const HeroesLink = props => <Link to="/movie-hero" {...props} />
const PythonServiceLink = props => <Link to="/python-service" {...props} />



export default class Header extends React.Component {
    render() {
        return(
            <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" style={{flexGrow: 1}}>
            Microservices Demo
          </Typography>
          <Button color="inherit" component={HomeLink}>Home</Button>
          <Button color="inherit" component={HeroesLink}>Movies &amp; Heroes</Button>
          <Button color="inherit" component={PythonServiceLink}>Python Service</Button>
        </Toolbar>
      </AppBar>
        );
    }
}