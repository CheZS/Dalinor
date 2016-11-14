import React from 'react';
import ReactDOM from 'react-dom';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

import Hello from './test/hello.jsx';
import World from './test/world.jsx';
import ProductList from './test/productList.jsx';
import NeuralNetwork from './neuralNetwork.jsx';
import NetworkTopo from './networkTopo.jsx';

const TAB_MAPPING = {
  'home': '首页',
  'sub1': {
    'name': '流量特征',
    '2': '检测脚本状态',
    '3': '流量特征信息'
  },
  'sub2': {
    'name': '流量识别',
    '5': '神经网络',
    '6': '识别结果'
  },
  'sub3': {
    'name': '流量调度',
    '9': '网络拓扑',
    '10': '流量调度满意度模型',
    '11': '流量调度'
  }
};

function containRoute(key) {
  if (key === 'home') {
    ReactDOM.render(<Hello/>, document.getElementById('main-container'));
  } else if (key === '2') {
    ReactDOM.render(<World/>, document.getElementById('main-container'));
  } else if (key === '3') {
    ReactDOM.render(<ProductList/>, document.getElementById('main-container'));
  } else if (key === '5') {
    ReactDOM.render(<NeuralNetwork/>, document.getElementById('main-container'));
  } else if (key === '9') {
    ReactDOM.render(<NetworkTopo/>, document.getElementById('main-container'));
  }
}

class Sider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openKeys: props.openKeys || [],
      current: props.current || 'home'
    }
  }

  componentDidMount() {
    const current = this.state.current;
    containRoute(current);
  }

  handleClick(e) {
    this.setState({current: e.key});
    containRoute(e.key);
  }

  onOpenChange(openKeys) {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = openKeys.find(key => !(openKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({ openKeys: nextOpenKeys });
  }

  getAncestorKeys(key) {
    const map = {
      sub3: ['sub2'],
    };
    return map[key] || [];
  }

  render() {
    return (
      <Menu
        theme="light"
        mode="inline"
        //openKeys={this.state.openKeys}
        selectedKeys={[this.state.current]}
        style={{ width: 240 }}
        onOpenChange={this.onOpenChange.bind(this)}
        onClick={this.handleClick.bind(this)}
      >
        <Menu.Item key="home">
          <span><Icon type="home" /><span>{TAB_MAPPING['home']}</span></span>
        </Menu.Item>
        <SubMenu key="sub1" title={<span><Icon type="dot-chart" /><span>{TAB_MAPPING['sub1'].name}</span></span>}>
          <Menu.Item key="2">{TAB_MAPPING['sub1']['2']}</Menu.Item>
          <Menu.Item key="3">{TAB_MAPPING['sub1']['3']}</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="pie-chart" /><span>{TAB_MAPPING['sub2'].name}</span></span>}>
          <Menu.Item key="5">{TAB_MAPPING['sub2']['5']}</Menu.Item>
          <Menu.Item key="6">{TAB_MAPPING['sub2']['6']}</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" title={<span><Icon type="area-chart" /><span>{TAB_MAPPING['sub3'].name}</span></span>}>
          <Menu.Item key="9">{TAB_MAPPING['sub3']['9']}</Menu.Item>
          <Menu.Item key="10">{TAB_MAPPING['sub3']['10']}</Menu.Item>
          <Menu.Item key="11">{TAB_MAPPING['sub3']['11']}</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

ReactDOM.render(<Sider/>, document.getElementById('main-sider'));
