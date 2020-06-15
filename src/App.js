import React, { Component } from 'react';
import EventForm from './Components/EventForm/EventForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  addEvents = (event) => {
    this.setState(state => ({
      items: [...state.events, event]
    }));
  }

  render() {
    return (
      <div>
        <EventForm addEvents={this.addEvents} />
        <ul>
          {this.state.events.map(item =>
            <li>
              {item.events}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
