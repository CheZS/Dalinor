import React from 'react';
import ReactDOM from 'react-dom';
import { PropTypes } from 'react';
import { Table, Popconfirm, Button} from 'antd';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Popconfirm title="Delete?">
        <Button>Delete</Button>
      </Popconfirm>
      );
  }
}

export default ProductList;
// ReactDOM.render(<ProductList/>, document.getElementById('productList'));
