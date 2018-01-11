// @flow

import './styles.css';
import AntSelect from 'app/components/antselect';
import config from 'app/config';
import constants from 'app/constants';
import consumptionQs from 'app/questions/consumption-information';

import * as React from 'react';
import { Button, Input, Select } from 'antd';
import { withFormik } from 'formik';

const Option = Select.Option;

// Our inner form component which receives our form's state and updater methods as props
const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  setFieldValue,
  setFieldTouched,
  isSubmitting,
}) => (
  <form onSubmit={handleSubmit}>
    <div style={{ margin: '1rem 0' }}>
      <label htmlFor="Q1">{consumptionQs[0].question}</label>
      <AntSelect
        id="Q1"
        name="answer_1"
        value={values.answer_1}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        options={consumptionQs[0].answers.map(a => {return { text: a, value: a };})}
      />
    </div>

    {consumptionQs[1].required_question != null && values.answer_1 == consumptionQs[1].required_question.answer &&
      <div style={{ margin: '1rem 0' }}>
        <label htmlFor="Q2">{consumptionQs[1].question}</label>
        <Input
          id="Q2"
          type="text"
          name="answer_2"
          value={values.answer_2}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
    }

    <div style={{ margin: '1rem 0' }}>
      <label htmlFor="Q3">{consumptionQs[2].question}</label>
      <AntSelect
        id="Q3"
        name="answer_3"
        value={values.answer_3}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        options={consumptionQs[2].answers.map(a => {return { text: a, value: a };})}
      />
    </div>

    <div style={{ margin: '1rem 0' }}>
      <label htmlFor="Q4">{consumptionQs[3].question}</label>
      <Input
        id="Q4"
        type="text"
        name="answer_4"
        value={values.answer_4}
        onChange={handleChange}
        onBlur={handleBlur}
        addonAfter={
          <AntSelect
            name="additional_options_4"
            value={values.additional_options_4}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            options={consumptionQs[3].additional_options.map(a => {return { text: a, value: a };})}
          />
        }
        addonAfter="kWh"
      />
    </div>

    <div style={{ margin: '1rem 0' }}>
      <label htmlFor="Q5">{consumptionQs[4].question}</label>
      <AntSelect
        id="Q5"
        name="answer_5"
        value={values.answer_5}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        options={consumptionQs[4].answers}
      />
    </div>

    {values.answer_5 == constants.CONTACT_METHOD_PHONE &&
      <div style={{ margin: '1rem 0' }}>
        <label htmlFor="phone_number">Phone Number</label>
        <Input
          id="phone_number"
          type="text"
          name="phone_number"
          value={values.phone_number}
          onChange={handleChange}
          onBlur={handleBlur}
          addonBefore={
            <AntSelect
              name="phone_number_country_code"
              value={values.phone_number_country_code}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
              options={constants.COUNTRY_CODES}
            />
          }
        />
        {errors.contact_number && <div style={{ color: 'red' }}>{errors.contact_number}</div>}
      </div>
    }

    {values.answer_5 == constants.CONTACT_METHOD_PHONE &&
      <div style={{ margin: '1rem 0' }}>
        <label htmlFor="mobile_number">Mobile Number</label>
        <Input
          id="mobile_number"
          type="text"
          name="mobile_number"
          value={values.mobile_number}
          onChange={handleChange}
          onBlur={handleBlur}
          addonBefore={
            <AntSelect
              name="mobile_number_country_code"
              value={values.mobile_number_country_code}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
              options={constants.COUNTRY_CODES}
            />
          }
        />
        {errors.contact_number && <div style={{ color: 'red' }}>{errors.contact_number}</div>}
      </div>
    }

    {values.answer_5 == constants.CONTACT_METHOD_EMAIL &&
      <div style={{ margin: '1rem 0' }}>
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </div>
    }

    <div style={{ margin: '1rem 0' }}>
      <Button type="submit" disabled={isSubmitting} onClick={(e) => handleSubmit(e)}>
        Submit
      </Button>
    </div>
  </form>
);

const ConsumptionForm = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({
    answer_1: consumptionQs[0].answers[0],
    answer_2: '',
    answer_3: consumptionQs[2].answers[0],
    answer_4: '',
    additional_options_4: consumptionQs[3].additional_options[0],
    answer_5: consumptionQs[4].answers[0].value,
    email: '',
    phone_number_country_code: '+65',
    phone_number: '',
    mobile_number_country_code: '+65',
    mobile_number: '',
  }),
  // Add a custom validation function (this can be async too!)
  validate: (values, props) => {
    const errors = {};

    if (values.answer_5 == constants.CONTACT_METHOD_EMAIL) {
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
    } else if (values.answer_5 == constants.CONTACT_METHOD_PHONE) {
      if (!values.phone_number && !values.mobile_number) {
        errors.contact_number = 'At least one number is required';
      }
    }

    return errors;
  },
  // Submission handler
  handleSubmit: (
    values,
    {
      props,
      setSubmitting,
      setErrors /* setValues, setStatus, and other goodies */,
    }
  ) => {
    let notes = `
      ${consumptionQs[0].question}
      ${values.answer_1}
    `;

    if (values.answer_1 == consumptionQs[0].answers[1] && values.answer_2) {
      notes += `
      ${consumptionQs[1].question}
      ${values.answer_2}
      `;
    }

    notes += `
      ${consumptionQs[2].question}
      ${values.answer_3}
    `;

    if (values.answer_4) {
      notes += `
      ${consumptionQs[3].question}
      ${values.answer_4} ${values.additional_options_4}
      `;
    }

    const answer_5 = consumptionQs[4].answers.filter(a => a.value === values.answer_5).pop().text;

    notes += `
      ${consumptionQs[4].question}
      ${answer_5}
    `;

    if (props.onSubmit) {
      props.onSubmit(notes);
    }

    setSubmitting(false);
  },
})(InnerForm);

export default ConsumptionForm;
