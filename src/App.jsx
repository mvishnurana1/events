import React, { Component } from 'react';
import EventForm from './Components/EventForm/EventForm';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <EventForm />
        );
    }
}

export default App;
