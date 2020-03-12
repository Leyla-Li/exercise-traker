import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ExercisesList extends Component {
    constructor(props){
        super(props);

        this.state = {
            exercises: []
        };

        deleteExercise = () => {}

        componentDidMount() {
            axios.get('http://loaclhost:5000/exercises/')
                .then(res => {
                    this.setState({exercises: res.data})
                })
                .catch(err => res.status(400).json('Error: '+ err));
        }
    }

    render() {
        return(
            <div>
                <p>You are on the Exercises List Component</p>
            </div>
        );
    }
}