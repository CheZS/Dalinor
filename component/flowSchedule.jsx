import echarts from 'echarts';
import React from 'react';
import { Table, Icon, Input, InputNumber, Menu, Dropdown, Button, Progress, Row, Col } from 'antd';

class FlowSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bandwidthExpect: 1,
      bandwidthVariance: 2,
      satisfyExpect: 3,
      satisfyVariance: 4,
      algo: 'SA'
    };
  }

  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    var bandwidthChart = echarts.init(document.getElementById('bandwidth-chart'));
    var satisfyChart = echarts.init(document.getElementById('satisfy-chart'));
    // 绘制图表
    var option = {
      title: {
        text: '带宽占用',
        subtext: 'MB/s'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data:['Flow1','Flow2','Flow3']
      },
      toolbox: {
        show: true,
        feature: {
          magicType: {show: true, type: ['stack', 'tiled']},
          saveAsImage: {show: true}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1s','2s','3s','4s','5s','6s','7s']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: 'Flow1',
        type: 'line',
        smooth: true,
        data: [10, 12, 21, 54, 260, 830, 710]
      },
      {
        name: 'Flow2',
        type: 'line',
        smooth: true,
        data: [30, 182, 434, 791, 390, 30, 10]
      },
      {
        name: 'Flow3',
        type: 'line',
        smooth: true,
        data: [1320, 1132, 601, 234, 120, 90, 20]
      }]
    };
    bandwidthChart.setOption(option);
    satisfyChart.setOption(option);
  }

  initAlgo() {
    return (
      <Menu onClick={this.algoChange.bind(this)}>
        <Menu.Item key="FirstFit">FirstFit</Menu.Item>
        <Menu.Item key="Dijkstra">Dijkstra</Menu.Item>
        <Menu.Item key="SA">SA</Menu.Item>
      </Menu>
    );
  }

  algoChange(e) {
    if (!e.key) return;
    this.setState({algo: e.key});
  }

  initConfig() {
    return (
      <table className="table">
        <tbody>
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
        </tbody>
      </table>
    );
  }

  initBandwidthGraph() {
    return (<div id="bandwidth-chart" style={{width: 800 + 'px', height: 600 + 'px'}}></div>);
  }

  initSatisfyGraph() {
    return (<div id="satisfy-chart" style={{width: 800 + 'px', height: 600 + 'px'}}></div>);
  }

  initStatistic() {
    return (
      <div className="statistic">
        <Row>
          <Col span={6}>
            <span className="bandwidth-expect">{this.state.bandwidthExpect}</span>
            <div>
              <span>带宽期望</span>
            </div>
          </Col>
          <Col span={6}>
            <span className="bandwidth-variance">{this.state.bandwidthVariance}</span>
            <div>
              <span>带宽方差</span>
            </div>
          </Col>
          <Col span={6}>
            <span className="satisfy-expect">{this.state.satisfyExpect}</span>
            <div>
              <span>满意度期望</span>
            </div>
          </Col>
          <Col span={6}>
            <span className="satisfy-variance">{this.state.satisfyVariance}</span>
            <div>
              <span>满意度方差</span>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

  render() {
    return (
      <div className="flow-schedule">
        {this.initConfig()}
        {this.initBandwidthGraph()}
        {this.initSatisfyGraph()}
        {this.initStatistic()}
      </div>
    );
  }
}

export default FlowSchedule;
