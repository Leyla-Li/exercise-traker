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
                <h3>Create New Exercise</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Username: </label>
                        <select ref='userInput'
                            required
                            className='form-control'
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {
                                this.state.users.map((user) => {
                                    return <option key={user} value={user}>
                                                {user}
                                            </option>
                                })
                            }    
                        </select>
                    </div>

                    <div className='form-group'>
                        <label>Description:</label>
                    </div>
                </form>
            </div>
        );
    }
}