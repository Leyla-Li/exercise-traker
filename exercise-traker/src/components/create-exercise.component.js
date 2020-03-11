import React, { Component } from 'react';

export default class CreateExercise extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: [],
        };
    }

    componentDidMount() {
        this.setState({
            users: ['test user'],
            username: 'test user'
        });
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        });
    }
    onChangeDescription = (e) => {
        this.setState({
            description: e.target.value
        });
    }
    onChangeDuration = (e) => {
        this.setState({
            duration: e.target.value
        });
    }
    onChangeDate = (date) => {
        this.setState({
            date: date
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        };

        console.log(exercise);

        sindow.location = '/';
    }

    render() {
        return(
            <div>
                <p>You are on the Create Exercise Component</p>
            </div>
        );
    }
}