import * as React from 'react';
import { Button } from 'antd';

class PromotionCodeMessage extends React.Component {
  state = {
    showDetails: false,
  }

  toggleMessageState = (state) => {
    this.setState({
      showDetails: state,
    });
  };

  render() {
    return (
      <div style={{ margin: '1rem 0' }}>
        {this.state.showDetails == false &&
          <div>
            <p>{this.props.summary}</p>
            <Button onClick={() => this.toggleMessageState(true)}>Show details</Button>
          </div>
        }
        {this.state.showDetails == true &&
          <div>
            <span dangerouslySetInnerHTML={{__html: this.props.details}} />
            <Button onClick={() => this.toggleMessageState(false)}>Hide details</Button>
          </div>
        }
      </div>
    );
  }
}

export default PromotionCodeMessage;
