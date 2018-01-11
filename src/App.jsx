// @flow

import styles from './styles.css';
import config from 'app/config';
import consumptionQs from 'app/questions/consumption-information';
import fetch from 'node-fetch';
import noImageUrl from 'app/assets/images/no-image.jpeg';

import * as React from 'react';
import { Col, Button, Row } from 'antd';
import { withFormik } from 'formik';
import ConsumptionForm from 'app/consumption-information-form'
import ContractForm from 'app/contract-form'
import PromotionCodeMessage from 'app/components/promotion-code-message'
import UserForm from 'app/user-form'

class App extends React.Component {
  state = {
    name: 'iSwitch',
    step: 0,
    promotions: [],
    promotion: null,
    notes: null,
  };

  componentWillMount() {
    let currentStep = window.localStorage.getItem('currentStep');
    let promotion = window.localStorage.getItem('currentPromotion');
    let promotions = [];

    fetch(
      `${config.API_URL}${config.API_PROMOTION_CODE_PATH}`,
      {
        headers: {
          'x-access-token': config.AUTH_TOKEN,
        },
      }
    )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      const now = new Date();

      promotions = json.data.filter((d) => {
        const availableDate = new Date(d.available_from);
        const endDate = new Date(d.promotion_end_date);

        if (now >= availableDate && endDate > now) {
          return true;
        }

        return false;
      });

      if (!currentStep) {
        window.localStorage.setItem('currentStep', 1);
      } else {
        if (currentStep > 1 && promotion) {
          const idx = promotions.findIndex(p => p._id == promotion._id);

          if (idx == -1) {
            currentStep = 1;
            promotion = null;
          }
        }
      }

      this.setState({ ...this.state, step: currentStep, promotions, promotion });
    });
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

  handleConsumptionFormSubmit = (notes) => {
    this.setState({
      ...this.state,
      step: 3,
      notes,
    }, () => {
      window.localStorage.setItem('currentStep', this.state.step);
      window.localStorage.setItem('notes', this.state.notes);
    });
  }

  handleContractFormSubmit = (data) => {
    const contractData = {
      'type': data.type,
      'sub_type': data.sub_type,
      'customer.contact_person.company_name': data.company_name,
      'customer.contact_person.industry':  data.industry,
      'customer.contact_person.salutation':  data.salutation,
      'customer.contact_person.contact.email':  data.email,
      'customer.contact_person.contact.phone_number.country_code':  data.phone_number_country_code,
      'customer.contact_person.contact.phone_number.number':  data.phone_number,
      'customer.contact_person.contact.mobile_number.country_code':  data.mobile_number_country_code,
      'customer.contact_person.contact.mobile_number.number':  data.mobile_number,
      'customer.contact_person.first_name': this.state.user.first_name,
      'customer.contact_person.last_name': this.state.user.last_name,
      'customer.contact_person.identity.nric_fin': this.state.user.nric,
    };

    fetch(
      `${config.API_URL}contract`,
      {
        method: 'POST',
        headers: {
          'x-access-token': config.AUTH_TOKEN,
        },
        body: JSON.stringify(contractData),
      }
    )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(json);
    });
    console.log(contractData);
  }

  handleUserFormSubmit = (user) => {
    console.log(user);
    this.setState({
      ...this.state,
      step: 4,
    });
  }

  handlePlanClick = (promotion) => {
    this.setState({
      ...this.state,
      step: 2,
      promotion,
    });
  }

  checkPromoDate = (promotion) => {
    const now = new Date();
    const startDate = new Date(promotion.promotion_start_date);

    if (startDate > now) {
      return false;
    }

    return true;
  }

  getImageUrl = (imageUrl) => {
    if (imageUrl) {
      return `${config.API_URL}${config.API_IMAGE_PATH}/${imageUrl}`;
    }

    return noImageUrl;
  }

  render() {
    return (
      <div styleName="App">
        <Row type="flex" justify="center">
          <h1>
            {this.state.step == 1 && 'Choose a plan'}
            {this.state.step == 2 && 'We need more data'}
            {this.state.step == 3 && 'Find me!'}
            {this.state.step == 4 && 'We need waaaayy more data'}
          </h1>
        </Row>

        <Row type="flex" justify="center">
          <Col xs={20} sm={16} md={12}>
            {this.state.step == 1 && this.state.promotions.map(p =>
              <div key={p._id}>
                <Row type="flex" justify="start" className={styles.promoItem}>
                  <div className={styles.promoImg}>
                    <img src={this.getImageUrl(p.to_design.image_url)} height="200px" width="200px"/>
                  </div>
                  <div className={styles.promoDesc}>
                    <h2 className={styles.promoTitle}>{p.promotion_name}</h2>
                    <PromotionCodeMessage summary={p.to_design.summary_message} details={p.to_design.detail_message} />
                  </div>
                </Row>
                <Row type="flex" justify="end" className={styles.promoFooter}>
                  <Button disabled={this.checkPromoDate(p)} onClick={() => this.handlePlanClick(p)}>Choose plan</Button>
                </Row>
              </div>
            )}

            {this.state.step == 2 &&
              <ConsumptionForm onSubmit={this.handleConsumptionFormSubmit} />
            }

            {this.state.step >= 3 &&
              <UserForm onSubmit={this.handleUserFormSubmit} disabled={this.state.step != 3} />
            }

            {this.state.step == 4 &&
              <ContractForm onSubmit={this.handleContractFormSubmit} />
            }
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Button onClick={this.onReset}>Reset</Button>
        </Row>
      </div>
    );
  }
}

export default App;
