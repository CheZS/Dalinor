import React from 'react';
import { Table, Icon, Input, InputNumber, Menu, Dropdown, Button, Progress, Row, Col } from 'antd';

class ClassificationResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feature: 'new',
      algo: 'BP',
      hiddenNum: 50,
      threshold: 50,
      iteration: 4000,
      traningTime: '3s',
      errorExpect: '10MB'
    }
  }

  initFeature() {
    return (
      <Menu onClick={this.featureChange.bind(this)}>
        <Menu.Item key="new">融合特征</Menu.Item>
        <Menu.Item key="trandition">传统特征</Menu.Item>
      </Menu>
    );
  }

  initAlgo() {
    return (
      <Menu onClick={this.algoChange.bind(this)}>
        <Menu.Item key="BP">BP</Menu.Item>
        <Menu.Item key="ELM">ELM</Menu.Item>
      </Menu>
    );
  }

  featureChange(e) {
    if (!e.key) return;
    this.setState({feature: e.key});
  }

  algoChange(e) {
    if (!e.key) return;
    this.setState({algo: e.key});
  }

  hiddenNumChange(value) {
    this.setState({hiddenNum: value});
  }

  thresholdChange(value) {
    this.setState({threshold: value});
  }

  iterationChange(value) {
    this.setState({iteration: value});
  }

  initConfig() {
    return (
      <table className="table">
        <tbody>
          <tr>
            <th>特征</th>
            <td>
              <Dropdown overlay={this.initFeature.apply(this, [])}>
                <Button type="ghost">
                  {this.state.feature === 'new' ? '融合特征' : '传统特征'} <Icon type="down" />
                </Button>
              </Dropdown>
            </td>
          </tr>
          <tr>
            <th>算法</th>
            <td>
              <Dropdown overlay={this.initAlgo.apply(this, [])}>
                <Button type="ghost">
                  {this.state.algo} <Icon type="down" />
                </Button>
              </Dropdown>
            </td>
          </tr>
          <tr>
            <th>隐层节点数</th>
            <td><InputNumber min={1} max={100} defaultValue={50} onChange={this.hiddenNumChange.bind(this)} /></td>
          </tr>
          <tr>
            <th>误差阈值</th>
            <td><InputNumber min={0} max={100} defaultValue={50} step={0.1} onChange={this.thresholdChange.bind(this)} /></td>
          </tr>
          <tr>
            <th>迭代上限</th>
            <td><InputNumber min={1000} max={10000} defaultValue={4000} onChange={this.iterationChange.bind(this)} /></td>
          </tr>
          <tr><th></th><td></td></tr>
        </tbody>
      </table>
    );
  }

  initStatistic() {
    return (
      <div className="statistic">
        <Row>
          <Col span={8}>
            <Progress type="circle" percent={80} format={percent => percent + '%'} />
          </Col>
          <Col span={8}>
            <span className="traning-time">{this.state.traningTime}</span>
          </Col>
          <Col span={8}>
            <span className="error-expect">{this.state.errorExpect}</span>
          </Col>
        </Row>
      </div>
    );
  }

  initLogTable() {
    const columns = [{
      title: 'ID',
      dataIndex: 'ID',
      key: 'ID'
    }, {
      title: 'F1',
      dataIndex: 'F1',
      key: 'F1'
    }, {
      title: 'F2',
      dataIndex: 'F2',
      key: 'F2'
    }, {
      title: 'F3',
      dataIndex: 'F3',
      key: 'F3'
    }, {
      title: 'F4',
      dataIndex: 'F4',
      key: 'F4'
    }, {
      title: 'F5',
      dataIndex: 'F5',
      key: 'F5'
    }, {
      title: 'F6',
      dataIndex: 'F6',
      key: 'F6'
    }, {
      title: 'F7',
      dataIndex: 'F7',
      key: 'F7'
    }, {
      title: 'F8',
      dataIndex: 'F8',
      key: 'F8'
    }, {
      title: 'F9',
      dataIndex: 'F9',
      key: 'F9'
    }, {
      title: 'F10',
      dataIndex: 'F10',
      key: 'F10'
    }, {
      title: '输出',
      dataIndex: 'Output',
      key: 'Output',
    }, {
      title: '真实类型',
      dataIndex: 'Real',
      key: 'Real',
    }, {
      title: '误差',
      dataIndex: 'Error',
      key: 'Error',
    }];

    const data = [{
      key: '1',
      ID: 'John Brown',
      F1: 32,
      F2: 32,
      F3: 32,
      F4: 32,
      F5: 32,
      F6: 32,
      F7: 32,
      F8: 32,
      F9: 32,
      F10: 32,
      Output: 1,
      Real: 1,
      Error: 0
    }, {
      key: '2',
      ID: 'Jim Green',
      F1: 32,
      F2: 32,
      F3: 32,
      F4: 32,
      F5: 32,
      F6: 32,
      F7: 32,
      F8: 32,
      F9: 32,
      F10: 32,
      Output: 1,
      Real: 1,
      Error: 0
    }, {
      key: '3',
      ID: 'Joe Black',
      F1: 32,
      F2: 32,
      F3: 32,
      F4: 32,
      F5: 32,
      F6: 32,
      F7: 32,
      F8: 32,
      F9: 32,
      F10: 32,
      Output: 1,
      Real: 1,
      Error: 0
    }];
    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }

  render() {
    return (
      <div className="classification-result">
        {this.initConfig()}
        {this.initStatistic()}
        {this.initLogTable()}
      </div>
    );
  }
}

export default ClassificationResult;
