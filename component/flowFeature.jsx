import React from 'react';
import { Table } from 'antd';

class FlowFeature extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const columns = [{
      title: '流量名称',
      dataIndex: 'name',
      key: 'name',
      width: 100,
      fixed: 'left',
      filters: [{
        text: 'Joe',
        value: 'Joe',
      }, {
        text: 'John',
        value: 'John',
      }],
      onFilter: (value, record) => record.name.indexOf(value) === 0,
    }, {
      title: '脚本状态特征',
      children: [
        {
          title: '流量1',
          dataIndex: 'flow1',
          key: 'flow1',
          width: 200,
          sorter: (a, b) => a.age - b.age,
        }, {
          title: '流量2',
          dataIndex: 'flow2',
          key: 'flow2',
          width: 200
        }, {
          title: '流量3',
          dataIndex: 'flow3',
          key: 'flow3',
          width: 200
        }, {
          title: '流量4',
          dataIndex: 'flow4',
          key: 'flow4',
          width: 200
        }
      ],
    }, {
      title: '传统特征',
      children: [
        {
          title: '源IP',
          dataIndex: 'srcIP',
          key: 'srcIP',
          width: 200,
        }, {
          title: '目的IP',
          dataIndex: 'dstIP',
          key: 'dstIP',
          width: 200,
        }, {
          title: '源端口',
          dataIndex: 'srcPort',
          key: 'srcPort',
          width: 200,
        }, {
          title: '目的端口',
          dataIndex: 'dstPort',
          key: 'dstPort',
          width: 200,
        }, {
          title: '协议',
          dataIndex: 'protocol',
          key: 'protocol',
          width: 200,
        }, {
          title: '每秒字节数',
          dataIndex: 'bps',
          key: 'bps',
          width: 200
        }
      ],
    }, {
      title: '时间',
      dataIndex: 'time',
      key: 'time',
      width: 100,
      fixed: 'right',
    }];

    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        key: i,
        name: 'John Brown',
        flow1: Math.random() * 5,
        flow2: Math.random() * 5,
        flow3: Math.random() * 5,
        flow4: Math.random() * 5,
        srcIP: Math.ceil(Math.random() * 32),
        dstIP: Math.ceil(Math.random() * 32),
        srcPort: Math.ceil(Math.random() * 20),
        dstPort: Math.ceil(Math.random() * 20),
        protocol: Math.ceil(Math.random() * 20),
        bps: Math.random() * 1000,
        time: new Date().toLocaleString()
      });
    }
    return (
      <Table
        columns={columns}
        dataSource={data}
        bordered
        size="middle"
        scroll={{ x: 2000, y: 500 }}
      />
    );
  }
}

export default FlowFeature;
