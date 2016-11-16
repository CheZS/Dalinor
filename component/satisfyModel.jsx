import echarts from 'echarts';
import React from 'react';
import { Table, Icon, Input, InputNumber, Menu, Dropdown, Button, Progress, Row, Col } from 'antd';

class SatisfyModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeNumber: 3,
      bExpect: 5.1,
      satisfyExpect: 11.67
    }
  }

  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    var satisfyChart = echarts.init(document.getElementById('satisfy-chart'));
    // 绘制图表
    var option = {
      title: {
        text: '满意度模型',
        subtext: 'Satisfy'
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
        // type: 'category',
        // boundaryGap: false,
        // data: ['0MB/s', '1MB/s','2MB/s','3MB/s','4MB/s','5MB/s','6MB/s']
        type: 'value'
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: 'Flow1',
        type: 'line',
        smooth: false,
        // data: [0, 12, 21, 54, 260, 830, 710]
        data: [[0, 0], [1, 10], [6, 10]]
      },
      {
        name: 'Flow2',
        type: 'line',
        smooth: false,
        // data: [0, 182, 434, 791, 390, 30, 10]
        data: [[0, 0], [2, 5], [6, 5]]
      },
      {
        name: 'Flow3',
        type: 'line',
        smooth: false,
        // data: [0, 1132, 601, 234, 120, 90, 20]
        data: [[0, 0], [3, 20], [6, 20]]
      }]
    };
    satisfyChart.setOption(option);
  }

  initChart() {
    return (<div id="satisfy-chart" style={{width: 800 + 'px', height: 600 + 'px'}}></div>);
  }

  initStatistic() {
    return (
      <div className="statistic">
        <Row>
          <Col span={8}>
            <span className="type-number">{this.state.typeNumber}</span>
            <div>
              <span>类型数</span>
            </div>
          </Col>
          <Col span={8}>
            <span className="b0-expect">{this.state.bExpect}</span>
            <div>
              <span>B0期望</span>
            </div>
          </Col>
          <Col span={8}>
            <span className="satisfy-expect">{this.state.satisfyExpect}</span>
            <div>
              <span>满意度期望</span>
            </div>
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
      title: '名称',
      dataIndex: 'Name',
      key: 'Name',
      render: (text, record) => (
        <a href="#">{text}</a>
      )
    }, {
      title: '描述',
      dataIndex: 'Description',
      key: 'Description'
    }, {
      title: '满意度',
      dataIndex: 'Satisfy',
      key: 'Satisfy'
    }, {
      title: 'B0',
      dataIndex: 'B',
      key: 'B'
    }];

    const data = [{
      key: '1',
      ID: 1,
      Name: 'John Brown',
      Description: 'description',
      Satisfy: 4,
      B: 4,
    }, {
      key: '2',
      ID: 2,
      Name: 'Jim Green',
      Description: 'description',
      Satisfy: 32,
      B: 4,
    }, {
      key: '3',
      ID: 3,
      Name: 'Joe Black',
      Description: 'description',
      Satisfy: 32,
      B: 4,
    }];
    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }

  render() {
    return (
      <div className="satisfy-model">
        {this.initChart()}
        {this.initStatistic()}
        {this.initLogTable()}
      </div>
    );
  }
}

export default SatisfyModel;
