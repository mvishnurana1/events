import React, { Component } from 'react';
import EventList from './Components/EventList/EventList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <EventList />
            </div>
        );
    }
}

export default App;
