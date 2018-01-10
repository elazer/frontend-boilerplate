// @flow

import './styles.css';
import config from 'app/config';
import consumptionQs from 'app/questions/consumption-information';

import * as React from 'react';
import { Col, Button, Row } from 'antd';
import { withFormik } from 'formik';
import ConsumptionForm from 'app/consumption-information-form'

class App extends React.Component {
  state = {
    name: 'iSwitch',
    step: 1,
  };

  componentWillMount() {
    const currentStep = window.localStorage.getItem('currentStep');

    if (currentStep > 1) {
      this.setState({ ...this.state, step: currentStep });
    } else {
      window.localStorage.setItem('currentStep', 1);
    }
  }

  onClickNextStep = (e) => {
    e.preventDefault();
    let step = parseInt(this.state.step);
    step+=1;

    this.setState({ ...this.state, step }, () => {
      window.localStorage.setItem('currentStep', step);
    });
  }

  onReset = (e) => {
    e.preventDefault();
    this.setState({ ...this.state, step: 1 }, () => {
      window.localStorage.setItem('currentStep', 1);
    });
  }

  handleConsumptionFormChange = (e) => {
    console.log(e);
  }

  render() {
    return (
      <div styleName="App">
        <Row type="flex" justify="center">
          <Col xs={20} sm={16} md={12} lg={8} xl={4}>
            <h1>{this.state.name} {this.state.step}</h1>
            <ConsumptionForm handleChange={this.handleConsumptionFormChange}/>
            {this.state.step === 1 && consumptionQs.map((q) =>
              <div key={q.no}>{q.no}</div>
            )}
            <Button onClick={this.onClickNextStep}>Next step</Button>
            <Button onClick={this.onReset}>Reset</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
