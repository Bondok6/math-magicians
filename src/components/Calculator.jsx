import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import calculate from './logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [operation, setOperation] = useState(null);
  const [next, setNext] = useState(null);

  const clickHandler = (e) => {
    const obj = calculate({ total, operation, next }, e.target.textContent);
    setTotal(obj.total);
    setOperation(obj.operation);
    setNext(obj.next);
  };

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
          <Button className="w-100 p-4" onClick={clickHandler}>
            AC
          </Button>
        </Col>
        <Col>
          <Button className="w-100 p-4" onClick={clickHandler}>
            +/-
          </Button>
        </Col>
        <Col>
          <Button className="w-100 p-4" onClick={clickHandler}>
            %
          </Button>
        </Col>
        <Col>
          <Button
            className="w-100 p-4"
            variant="warning"
            onClick={clickHandler}
          >
            ÷
          </Button>
        </Col>
      </Row>

      <Row className="m-3">
        <Col>
          <Button className="w-100 p-4" onClick={clickHandler}>
            7
          </Button>
        </Col>
        <Col>
          <Button className="w-100 p-4" onClick={clickHandler}>
            8
          </Button>
        </Col>
        <Col>
          <Button className="w-100 p-4" onClick={clickHandler}>
            9
          </Button>
        </Col>
        <Col>
          <Button
            className="w-100 p-4"
            variant="warning"
            onClick={clickHandler}
          >
            x
          </Button>
        </Col>
      </Row>

      <Row className="m-3">
        <Col>
          <Button className="w-100 p-4" onClick={clickHandler}>
            4
          </Button>
        </Col>
        <Col>
          <Button className="w-100 p-4" onClick={clickHandler}>
            5
          </Button>
        </Col>
        <Col>
          <Button className="w-100 p-4" onClick={clickHandler}>
            6
          </Button>
        </Col>
        <Col>
          <Button
            className="w-100 p-4"
            variant="warning"
            onClick={clickHandler}
          >
            -
          </Button>
        </Col>
      </Row>

      <Row className="m-3">
        <Col>
          <Button className="w-100 p-4" onClick={clickHandler}>
            1
          </Button>
        </Col>
        <Col>
          <Button className="w-100 p-4" onClick={clickHandler}>
            2
          </Button>
        </Col>
        <Col>
          <Button className="w-100 p-4" onClick={clickHandler}>
            3
          </Button>
        </Col>
        <Col>
          <Button
            className="w-100 p-4"
            variant="warning"
            onClick={clickHandler}
          >
            +
          </Button>
        </Col>
      </Row>

      <Row className="m-3">
        <Col>
          <Button className="w-100 p-4" onClick={clickHandler}>
            0
          </Button>
        </Col>
        <Col xs={6}>
          <Button className="w-100 p-4" onClick={clickHandler}>
            .
          </Button>
        </Col>
        <Col>
          <Button
            className="w-100 p-4"
            variant="warning"
            onClick={clickHandler}
          >
            =
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Calculator;

// class Calculator extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       total: null,
//       next: null,
//       operation: null,
//     };

//     this.clickHandler = this.clickHandler.bind(this);
//   }

//   clickHandler(e) {
//     this.setState((state) => calculate(state, e.target.textContent));
//   }

//   render() {
//     const { total, next, operation } = this.state;

//   }
// }

// export default Calculator;
