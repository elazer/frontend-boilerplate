// @flow

import './styles.css';
import config from 'app/config';
import fetch from 'node-fetch';

import * as React from 'react';
import { Button, Input } from 'antd';
import { withFormik } from 'formik';

// Our inner form component which receives our form's state and updater methods as props
const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  disabled,
}) => (
  <form onSubmit={handleSubmit}>
    <div style={{ margin: '1rem 0' }}>
      <label htmlFor="first_name">First Name</label>
      <Input
          id="first_name"
          type="text"
          name="first_name"
          value={values.first_name}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={disabled}
        />
      {errors.first_name && touched.first_name && <div style={{ color: 'red' }}>{errors.first_name}</div>}
    </div>

    <div style={{ margin: '1rem 0' }}>
      <label htmlFor="last_name">Last Name</label>
      <Input
          id="last_name"
          type="text"
          name="last_name"
          value={values.last_name}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={disabled}
        />
      {errors.last_name && touched.last_name && <div style={{ color: 'red' }}>{errors.last_name}</div>}
    </div>

    <div style={{ margin: '1rem 0' }}>
      <label htmlFor="nric">NRIC</label>
      <Input
          id="nric"
          type="text"
          name="nric"
          value={values.nric}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={disabled}
        />
      {errors.nric && touched.nric && <div style={{ color: 'red' }}>{errors.nric}</div>}
    </div>

    {!disabled &&
      <div style={{ margin: '1rem 0' }}>
        <Button type="submit" disabled={isSubmitting} onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>
      </div>
    }
  </form>
);

const UserForm = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({
    nric: '',
    first_name: '',
    last_name: '',
  }),
  // Add a custom validation function (this can be async too!)
  validate: (values, props) => {
    const errors = {};

    if (!values.first_name) {
      errors.first_name = 'Required';
    }

    if (!values.last_name) {
      errors.last_name = 'Required';
    }

    if (!values.nric) {
      errors.nric = 'Required';
    } else {
      return fetch(
        `${config.API_URL}service/customer/get/nric/${values.nric}`,
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
        if (json.data.length > 0) {
          const customer = json.data.pop();
          const first_name = customer.contact_person.first_name;
          const last_name = customer.contact_person.last_name;
          const errors = {};

          if (values.first_name && first_name != values.first_name) {
            errors.first_name = 'NRIC and Name do not match';
          }

          if (values.last_name && last_name != values.last_name) {
            errors.last_name = 'NRIC and Name do not match';
          }

          if (errors) {
            throw errors;
          }
        }
      });
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
    if (props.onSubmit) {
      props.onSubmit(values);
    }

    setSubmitting(false);
  },
})(InnerForm);

export default UserForm;
