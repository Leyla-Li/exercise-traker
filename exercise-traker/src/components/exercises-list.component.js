import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ExercisesList extends Component {
    constructor(props){
        super(props);

        this.state = {
            exercises: []
        };
    }

    componentDidMount() {
        axios.get('http://loaclhost:5000/exercises/')
            .then(res => {
                this.setState({exercises: res.data})
            })
            .catch(err => res.status(400).json('Error: '+ err));
    }

    deleteExercise = (id) => {
        axios.delete('http://localhost:5000/exercises/' + id)
            .then(res => console.log(res.data));
        this.setState({
            exercises: this.state.exercises.filter(el => el.id !== id)
        })
    }

    render() {
        return(
            <div>
                <p>You are on the Exercises List Component</p>
            </div>
        );
    }
}