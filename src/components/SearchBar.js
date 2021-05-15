import React from 'react';
import { Form, Col, Row, Button, Container } from 'react-bootstrap'

class SearchBar extends React.Component {
  render() {
    return (
      <>
        <Container className="bg-dark">
          <Form onSubmit={this.props.handleSubmit}>
            <Row className="justify-content-center">
              <Col>
                <Form.Control name="term" placeholder="Keyword" onChange={e => this.props.handleOnChange(e)} value={this.props.term}/>
              </Col>
              <Col>
                <Form.Control name="location" placeholder="City, State" onChange={e => this.props.handleOnChange(e)} value={this.props.location}/>
              </Col>
              <Col>
                <Button variant="primary" type="submit">GO</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </>
    )
  }
}

export default SearchBar;
