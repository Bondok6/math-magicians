import React, { Component } from 'react';

// prettier-ignore
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  render() {
    return (
      <Container>
        <Row className="m-2">
          <Col>
            <div dir="rtl" className="w-100 p-2">
              0
            </div>
          </Col>
        </Row>
        <Row className="m-2">
          <Col>
            <Button className="w-100 p-4">AC</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4">+/-</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4">%</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" variant="warning">
              /
            </Button>
          </Col>
        </Row>
        <Row className="m-2">
          <Col>
            <Button className="w-100 p-4">7</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4">8</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4">9</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" variant="warning">
              x
            </Button>
          </Col>
        </Row>
        <Row className="m-2">
          <Col>
            <Button className="w-100 p-4">4</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4">5</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4">6</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" variant="warning">
              -
            </Button>
          </Col>
        </Row>
        <Row className="m-2">
          <Col>
            <Button className="w-100 p-4">1</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4">2</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4">3</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" variant="warning">
              +
            </Button>
          </Col>
        </Row>
        <Row className="m-2">
          <Col>
            <Button className="w-100 p-4">0</Button>
          </Col>
          <Col xs={6}>
            <Button className="w-100 p-4">.</Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" variant="warning">
              =
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Calculator;
