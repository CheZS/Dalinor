import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user || 'CheZS'
    }
  }

  render() {
    return (
      <div>
        <img src="asset/image/logo.svg" className="logo"></img>
        <div className="title">
          <span>云检测流量识别与调度系统</span>
        </div>
        <div className="user-info">
          <span>欢迎, </span>
          <strong>{this.state.user}</strong>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Header/>, document.getElementById('main-header'));
