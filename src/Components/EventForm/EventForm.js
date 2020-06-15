import React, { Component } from 'react'
import { Col, Container, Form, Button } from 'react-bootstrap';

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventTitle: '', ocasion: '', suburb: '', postCode: '',
      Message: '', ContactEmail: '', service: '', foodType: '',
      events: []
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitHandler = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <Container className="d-flex justify-content-center mt-3 p-5 bg-dark">
        <Form onSubmit={this.submitHandler} className=" form-group text-primary">
          <h1>Events Form</h1>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label htmlFor="eventTitle">Event Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                name="eventTitle"
                value={this.state.eventTitle}
                onChange={this.handleChange}
              />
              <Form.Text />
            </Form.Group>

            <Form.Group as={Col} >
              <Form.Label>Ocasion</Form.Label>
              <Form.Control
                type="text"
                name="ocasion"
                placeholder="Enter Ocasion"
                value={this.state.ocasion}
                onChange={this.handleChange}
              />
              <Form.Text />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} >
              <Form.Label>Suburb</Form.Label>
              <Form.Control
                type="text"
                name="suburb"
                placeholder="Enter Suburb"
                value={this.state.suburb}
                onChange={this.handleChange}
              />
              <Form.Text />
            </Form.Group>

            <Form.Group as={Col} >
              <Form.Label>Post Code</Form.Label>
              <Form.Control
                type="number"
                name="postCode"
                placeholder="Enter PostCode"
                onChange={this.handleChange}
              />
              <Form.Text />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} >
              <Form.Label>Type Of Service</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Pick One"
                name="service"
                onChange={this.handleChange}
              >
                <option>Pick One</option>
                <option>Waiters</option>
                <option>Catering</option>
                <option>Waiters only</option>
                <option>Waiters and Catering Only</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Food Type</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Pick One"
                name="foodType"
                onChange={this.handleChange}
              >
                <option>Pick One</option>
                <option>Australian Food</option>
                <option>Mexican Food</option>
                <option>Continental Food</option>
                <option>Indian Food</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} >
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Message for Organiser"
                rows="4"
                name="Message"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} >
              <Form.Label>Contact Email</Form.Label>
              <Form.Control
                type="email"
                name="ContactEmail"
                placeholder="contact email"
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Button
            className="justify-content-md-center"
            variant="primary"
            type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    )
  }
}

export default EventForm; 