import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';

class Task extends Component {
    render() {
        return (
            <span>
                <ListGroupItem href="/">{this.props.text}</ListGroupItem>
            </span>
        );
    }
}

Task.propTypes = {
    text: PropTypes.string,
}

Task.defaultProps = {
    text: '',
}

export default Task;
