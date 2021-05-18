import React from 'react';
import { Form, Col, Row, Button, Container } from 'react-bootstrap'

class SearchBar extends React.Component {
  render() {
    return (
      <>
        <Container className="my-3">
          <Form onSubmit={this.props.handleSubmit}>
            <Row className="d-flex justify-content-center">
              <Col xs={5} className="pr-0">
                <Form.Control required name="term" placeholder="Keyword" onChange={e => this.props.handleOnChange(e)} value={this.props.term} />
              </Col>
              <Col xs={5} className="pl-0 pr-0">
                <Form.Control required sname="location" placeholder="City, State" onChange={e => this.props.handleOnChange(e)} value={this.props.location} />
              </Col>
              <Col xs={2} className="pl-0">
                <Button variant="primary" type="submit">Search</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </>
    )
  }
}

export default SearchBar;
