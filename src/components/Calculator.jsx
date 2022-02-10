import { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import calculate from './logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <div className="container">
        <Row className="m-3">
          <Col>
            <div className="w-100 p-2 display">
              {total}
              {operation}
              {next}
            </div>
          </Col>
        </Row>

        <Row className="m-3">
          <Col>
            <Button className="w-100 p-4" onClick={this.clickHandler}>
              AC
            </Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={this.clickHandler}>
              +/-
            </Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={this.clickHandler}>
              %
            </Button>
          </Col>
          <Col>
            <Button
              className="w-100 p-4"
              variant="warning"
              onClick={this.clickHandler}
            >
              ÷
            </Button>
          </Col>
        </Row>

        <Row className="m-3">
          <Col>
            <Button className="w-100 p-4" onClick={this.clickHandler}>
              7
            </Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={this.clickHandler}>
              8
            </Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={this.clickHandler}>
              9
            </Button>
          </Col>
          <Col>
            <Button
              className="w-100 p-4"
              variant="warning"
              onClick={this.clickHandler}
            >
              x
            </Button>
          </Col>
        </Row>

        <Row className="m-3">
          <Col>
            <Button className="w-100 p-4" onClick={this.clickHandler}>
              4
            </Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={this.clickHandler}>
              5
            </Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={this.clickHandler}>
              6
            </Button>
          </Col>
          <Col>
            <Button
              className="w-100 p-4"
              variant="warning"
              onClick={this.clickHandler}
            >
              -
            </Button>
          </Col>
        </Row>

        <Row className="m-3">
          <Col>
            <Button className="w-100 p-4" onClick={this.clickHandler}>
              1
            </Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={this.clickHandler}>
              2
            </Button>
          </Col>
          <Col>
            <Button className="w-100 p-4" onClick={this.clickHandler}>
              3
            </Button>
          </Col>
          <Col>
            <Button
              className="w-100 p-4"
              variant="warning"
              onClick={this.clickHandler}
            >
              +
            </Button>
          </Col>
        </Row>

        <Row className="m-3">
          <Col>
            <Button className="w-100 p-4" onClick={this.clickHandler}>
              0
            </Button>
          </Col>
          <Col xs={6}>
            <Button className="w-100 p-4" onClick={this.clickHandler}>
              .
            </Button>
          </Col>
          <Col>
            <Button
              className="w-100 p-4"
              variant="warning"
              onClick={this.clickHandler}
            >
              =
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Calculator;
