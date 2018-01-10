import * as React from 'react';
import { Button, Select } from 'antd';

const Option = Select.Option;

class AntSelect extends React.Component {
  handleChange = value => {
    // this is going to call setFieldValue and manually update values.topcis
    this.props.onChange(this.props.name, value);
  };

  handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topcis
    this.props.onBlur(this.props.name, true);
  };

  render() {
    return (
      <div style={{ margin: '1rem 0' }}>
        <Select
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={this.props.value}
        >
          {this.props.options.map((o) =>
            <Option value={o.value} key={o.value}>{o.text}</Option>
          )}
        </Select>
        {!!this.props.error &&
        this.props.touched && (
          <div style={{ color: 'red', marginTop: '.5rem' }}>
            {this.props.error}
          </div>
        )}
      </div>
    );
  }
}

export default AntSelect;
