import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (<div><h1>{this.state.date.toLocaleTimeString()}</h1><h1>Hello</h1></div>)
  }
}

export default Hello;
// ReactDOM.render(<Hello/>, document.getElementById('hello'));
