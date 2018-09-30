import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import Task from './Task';
import { Context } from './Context';

class Tasks extends Component {
    list(tasks) {
        console.log(tasks);
        return tasks.map(data => (
            <div>
                <Task text={data.text} key={data._id} />
            </div>
        ));
    }
    render() {
        return (
            <div className="row">
                <div className="text-center">
                    <Context.Consumer>
                        {
                            (context) => {
                                return (
                                    <ListGroup>
                                        {this.list(context.tasks)}
                                    </ListGroup>
                                )
                            }
                        }
                    </Context.Consumer>
                </div>
            </div>
        );
    }
}

Tasks.propTypes = {
    currentData: PropTypes.arrayOf(PropTypes.object),
}

Tasks.defaultProps = {
    currentData: [],
}

export default Tasks;
