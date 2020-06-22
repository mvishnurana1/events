import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { uuid } from 'uuidv4';
import EventForm from '../EventForm/EventForm';

const PageBreakDown = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    alignContent: 'stretch'
};

const EventCardStyle = {
    width: '18rem',
    marginBottom: '20px',
    textAlign: 'center'
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

        return events.map((event) => (
            <Card key={uuid()} className="text-primary" style={EventCardStyle}>
                <Card.Title>{event.eventTitle}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>{event.service}</ListGroup.Item>
                    <ListGroup.Item>{event.foodType}</ListGroup.Item>
                    <ListGroup.Item>{event.ContactEmail}</ListGroup.Item>
                    <ListGroup.Item>{event.postCode}</ListGroup.Item>
                </ListGroup>
            </Card>
        ));
    }

    render() {
        const { events } = this.state;

        if (events.length === 0) {
            return (
                <div>
                    <EventForm addEvent={this.addEvent} />
                </div>
            );
        }

        return (

            <div style={PageBreakDown}>
                <div className="bg-dark mt-3 p-5 text-primary">
                    <h1>Events List</h1>
                    {this.renderItems()}
                </div>
                <div>
                    <EventForm addEvent={this.addEvent} />
                </div>
            </div>
        );
    }
}

export default EventList;
