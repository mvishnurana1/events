import React, { Component } from 'react';
import EventForm from '../EventForm/EventForm';

const styleObject = {
    color: 'white',
    backgroundColor: 'black'
};

class EventList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
        this.addEvent = this.addEvent.bind(this);
    }

    addEvent(event) {
        this.setState((state) => ({
            events: [...state.events, event]
        }));
    }

    renderItems() {
        const { events } = this.state;
        return (
            <ul style={styleObject}>
                {
                    events.map((event) => (
                        <li>
                            Event Title :
                            {event.eventTitle}
                            <br />
                            Post Code :
                            {event.postCode}
                            <br />
                            Occasion :
                            {event.occasion}
                            <br />
                            Food Type :
                            {event.foodType}
                            <br />
                            Service Type :
                            {event.service}
                            <br />
                            Contact Email :
                            {event.ContactEmail}
                        </li>
                    ))
                }
            </ul>
        );
    }

    render() {
        return (
            <div>
                <h1>Events List</h1>
                {this.renderItems()}
                <EventForm addEvent={this.addEvent} />
            </div>
        );
    }
}

export default EventList;
