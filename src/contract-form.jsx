// @flow

import './styles.css';
import AntSelect from 'app/components/antselect';
import config from 'app/config';
import constants from 'app/constants';

import * as React from 'react';
import { Button, Input, Select } from 'antd';
import { withFormik } from 'formik';

const Option = Select.Option;

const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  hideSubmit,
  setFieldValue,
  setFieldTouched,
  isSubmitting,
}) => (
  <form onSubmit={handleSubmit}>
    <div style={{ margin: '1rem 0' }}>
      <label htmlFor="salutation">Salutation</label>
      <AntSelect
        id="salutation"
        name="salutation"
        value={values.salutation}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        options={constants.SALUTATIONS}
      />
    </div>

    <div style={{ margin: '1rem 0' }}>
      <label htmlFor="type">Category</label>
      <AntSelect
        id="type"
        name="type"
        value={values.type}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        options={constants.CONTRACT_TYPES}
      />
    </div>

    {values.type == constants.COMMERCIAL &&
      <div style={{ margin: '1rem 0' }}>
        <label htmlFor="company_name">Organization Name</label>
        <Input
          id="company_name"
          type="text"
          name="company_name"
          value={values.company_name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.company_name && touched.company_name && <div style={{ color: 'red' }}>{errors.company_name}</div>}
      </div>
    }

    {values.type == constants.COMMERCIAL &&
      <div style={{ margin: '1rem 0' }}>
        <label htmlFor="industry">Industry</label>
        <AntSelect
          id="industry"
          name="industry"
          value={values.industry}
          onChange={setFieldValue}
          onBlur={setFieldTouched}
          options={constants.INDUSTRIES}
        />
      </div>
    }

    {values.type == constants.RESIDENTIAL &&
      <div style={{ margin: '1rem 0' }}>
        <label htmlFor="sub_type">Premise Type</label>
        <AntSelect
          id="sub_type"
          name="sub_type"
          value={values.sub_type}
          onChange={setFieldValue}
          onBlur={setFieldTouched}
          options={constants.CONTRACT_SUB_TYPE}
        />
      </div>
    }

    <div style={{ margin: '1rem 0' }}>
      <Button type="submit" disabled={isSubmitting} onClick={(e) => handleSubmit(e)}>
        Submit
      </Button>
    </div>
  </form>
);

const ContractForm = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({
    type: '',
    sub_type: '',
    company_name: '',
    industry: '',
    salutation: 'MR',
  }),
  // Add a custom validation function (this can be async too!)
  validate: (values, props) => {
    const errors = {};

    if (!values.type) {
      errors.type = 'Required';
    }

    if (values.type == constants.COMMERCIAL && !values.company_name) {
      errors.company_name = 'Required';
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

export default ContractForm;
