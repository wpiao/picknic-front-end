import React from 'react';
import { Form, Col, Row, Button, Container } from 'react-bootstrap'


class SearchBar extends React.Component {
    render(){
        return(
            <>
            <Container className="bg-dark">
                <Form inline>
                    <Row className="justify-content-center">
                    <Col>
                        <Form.Control placeholder="Search City" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Search State" />
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