import React from 'react';
import ReactDOM from 'react-dom';

class World extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
  }
  render() {
    var user = this.state.user ? this.state.user : 'CheZS';
    return <h1>World {user}</h1>
  }
}

export default World;
// ReactDOM.render(<World user="Yung" />, document.getElementById('world'));
