import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './App.css';
import Tasks from './Tasks';
import Header from './Header';
import AddTask from './AddTask';
import { Context } from './Context';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [{
                _id: uuidv4(),
                text: 'Default',
            }],
            addTask: (task) => {
                const tasks = this.state.tasks;
                tasks.push(task);
                console.log(tasks);
                this.setState({ tasks })
            }
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Context.Provider value={this.state}>
                    <AddTask />
                    <Tasks />
                </Context.Provider>
            </div>
        );
    }
}

App.propTypes = {
    currentData: PropTypes.string,
}

App.defaultProps = {
    currentData: '',
}

export default App;
