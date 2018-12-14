import React from 'react';
import axios from 'axios';
import { constructBaseURL } from './helpers/utils';
import {
    Typography,
    Grid,
    Paper,
    TextField,
    Button,
    List,
    ListItem,
    Avatar,
    ListItemAvatar,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Chip,
    FormControl,
    MenuItem,
    Checkbox,
    InputLabel,
    Select,
    Input
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import MovieIcon from '@material-ui/icons/Movie';
import PeopleIcon from '@material-ui/icons/People';

const MOVIE_SERVICE = "/api/movies";

const HEROES_SERVICE = "/api/heroes";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};




export default class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heroName: '',
            heroesList: [],
            movieName: '',
            moviesList: [],
            selectedHeroes: []
        };
    }
    handleChange = name => event => {
        this.setState({
            heroName: event.target.value,
        });
    };

    addHero = () => event => {
        const { heroName } = this.state;
        if (heroName != '') {
            axios.post(constructBaseURL(HEROES_SERVICE), {
                name: heroName,
            }).then(function (response) {
                console.log(response);
                this.setState({ heroName: '' });
                this.getHeroes()
            }.bind(this))
        }
    }

    deleteHero = (id, event) => {
        const { heroName } = this.state;
        axios.delete(constructBaseURL(HEROES_SERVICE + "/" + id)).then(function (response) {
            console.log(response);
            this.getHeroes()
        }.bind(this))
    }


    getHeroes = () => {
        console.log("Movies");
        axios.get(constructBaseURL(HEROES_SERVICE))
            .then(function (response) {
                console.log(response);
                this.setState({ heroesList: response.data })
            }.bind(this))
    }

    handleMovieChange = name => event => {
        this.setState({
            movieName: event.target.value,
        });
    };

    addMovie = () => event => {
        const { movieName, selectedHeroes } = this.state;
        if (movieName != '') {
            axios.post(constructBaseURL(MOVIE_SERVICE), {
                name: movieName,
                heroes: selectedHeroes
            }).then(function (response) {
                console.log(response);
                this.setState({ movieName: '', selectedHeroes: [] });
                this.getMovies()
            }.bind(this))
        }
    }

    deleteMovie = (id, event) => {
        const { movieName } = this.state;
        axios.delete(constructBaseURL(MOVIE_SERVICE + "/" + id)).then(function (response) {
            console.log(response);
            this.getMovies()
        }.bind(this))
    }


    getMovies = () => {
        console.log("Movies");
        axios.get(constructBaseURL(MOVIE_SERVICE))
            .then(function (response) {
                console.log(response);
                this.setState({ moviesList: response.data })
            }.bind(this))
    }

    handleSelectedHeroes = event => {
        this.setState({ selectedHeroes: event.target.value });
      };

    componentDidMount() {
        this.getHeroes();
        this.getMovies();
    }

    render() {
        const { heroName, heroesList } = this.state;
        let heroElements = [];
        heroesList.forEach((hero) => {
            heroElements.push(<ListItem key={hero._id}>
                <ListItemAvatar>
                    <Avatar>
                        <PeopleIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={hero.name}
                />
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete">
                        <DeleteIcon onClick={this.deleteHero.bind(this, hero._id)} />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>)
        });
        const { movieName, moviesList } = this.state;
        let movieElements = [];
        
        moviesList.forEach((movie) => {
            let selectedHeroElements = [];
            movie.heroes.forEach((hero) => {
                selectedHeroElements.push(<Chip style={{marginRight: '5px'}} label={hero} key={hero} />);
            });
            movieElements.push(<ListItem key={movie._id}>
                <ListItemAvatar>
                    <Avatar>
                        <MovieIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={movie.name}
                    secondary={<div>{selectedHeroElements}</div>}
                />
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete">
                        <DeleteIcon onClick={this.deleteMovie.bind(this, movie._id)} />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>)
        })
        return (<div style={{ margin: '30px' }}>
            <Grid container spacing={24}>
                <Grid item xs={6} >
                    <Typography variant="h2" gutterBottom >Heroes Microservice</Typography>
                    <Paper style={{ padding: '20px' }}>
                        <Typography variant="h4">Add your Hero</Typography>
                        <TextField
                            id="filled-name"
                            label="Movie Name"
                            value={heroName}
                            onChange={this.handleChange('name')}
                            margin="normal"
                            variant="filled"
                        /> <br />
                        <Button onClick={this.addHero()} variant="contained" color="primary">Add Hero</Button>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h2" gutterBottom >Movies Microservice</Typography>
                    <Paper style={{ padding: '20px' }}>
                        <Typography variant="h4">Add Movie</Typography>
                        <TextField
                            id="filled-name"
                            label="Movie Name"
                            value={movieName}
                            onChange={this.handleMovieChange('name')}
                            margin="normal"
                            variant="filled"
                        /> <br />
                        <FormControl>
                            <InputLabel htmlFor="select-multiple-checkbox">Heroes</InputLabel>
                            <Select
                                multiple
                                value={this.state.selectedHeroes}
                                onChange={this.handleSelectedHeroes}
                                input={<Input id="select-multiple-checkbox" />}
                                renderValue={selected => selected.join(', ')}
                                MenuProps={MenuProps}
                                style={{width: '200px'}}
                            >
                                {heroesList.map(hero => (
                                    <MenuItem key={hero._id} value={hero.name}>
                                        <Checkbox checked={this.state.selectedHeroes.indexOf(hero.name) > -1} />
                                        <ListItemText primary={hero.name} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <br />
                        <br />
                        <Button onClick={this.addMovie()} variant="contained" color="primary">Add Movie</Button>
                    </Paper>


                </Grid>
            </Grid>
            <Grid container spacing={24}>
                <Grid item xs={12} style={{ marginTop: '30px' }}>

                </Grid>
                <Grid item xs={6} >
                    <List style={{ backgroundColor: 'white' }}>
                        {heroElements}
                    </List>
                </Grid>
                <Grid item xs={6}>

                    <List style={{ backgroundColor: 'white' }}>
                        {movieElements}
                    </List>

                </Grid>
            </Grid>
        </div>
        );
    }
}