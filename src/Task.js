import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {  ListGroupItem } from 'react-bootstrap';
import './App.css';

class App extends Component {
    render() {
        return (
            <span>
                <ListGroupItem href="#link1">{this.props.text}</ListGroupItem>
            </span>
        );
    }
}

App.propTypes = {
    text: PropTypes.string,
}

App.defaultProps = {
    text: '',
}

export default App;
