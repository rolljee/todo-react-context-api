import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Context } from './Context';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class AddTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
        }
        this.update = this.update.bind(this);
        this.handle = this.handle.bind(this);
    }

    update(event) {
        this.setState({ text: event.target.value });
    }

    handle(event, context) {
        event.preventDefault();
        context.addTask({
            _id: uuidv4(),
            text: this.state.text,
        })
    }

    render() {
        return (
            <span className="text-center">
                <Context.Consumer>
                    {(context) =>
                        <Form inline onSubmit={(e) => this.handle(e, context)}>
                            <FormGroup controlId="formInlineEmail">
                                <FormControl onChange={this.update} type="text" placeholder="Type some text..." />
                            </FormGroup>
                            <Button type="submit">Add</Button>
                        </Form>
                    }
                </Context.Consumer>
            </span>
        );
    }
}

AddTask.propTypes = {
    currentData: PropTypes.string,
}

AddTask.defaultProps = {
    currentData: '',
}

export default AddTask;
