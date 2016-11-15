import React from 'react';
import { Timeline, Table, Icon, Row, Col } from 'antd';

class ScriptStatus extends React.Component {

  constructor(props) {
    super(props);
  }

  initTimeLine() {
    var count = 4;
    var span = 24 / 4;
    var ret = [];
    for (var i = 0; i < count; i++) {
      ret.push(
        <Col span={span} key={i}>
          <Timeline>
            <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item color="red">
              <p>Solve initial network problems 1</p>
              <p>Solve initial network problems 2</p>
              <p>Solve initial network problems 3 2015-09-01</p>
            </Timeline.Item>
            <Timeline.Item>
              <p>Technical testing 1</p>
              <p>Technical testing 2</p>
              <p>Technical testing 3 2015-09-01</p>
            </Timeline.Item>
          </Timeline>
        </Col>
      );
    }
    return (
      <Row>
        {ret}
      </Row>
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
      title: '实例数量',
      dataIndex: 'InstanceNumber',
      key: 'InstanceNumber'
    }, {
      title: '状态数量',
      dataIndex: 'StateNumber',
      key: 'StateNumber'
    }];

    const data = [{
      key: '1',
      ID: 1,
      Name: 'John Brown',
      Description: 'description',
      InstanceNumber: 4,
      StateNumber: 4,
    }, {
      key: '2',
      ID: 2,
      Name: 'Jim Green',
      Description: 'description',
      InstanceNumber: 32,
      StateNumber: 4,
    }, {
      key: '3',
      ID: 3,
      Name: 'Joe Black',
      Description: 'description',
      InstanceNumber: 32,
      StateNumber: 4,
    }];
    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }

  render() {
    return (
      <div className="script-status">
        {this.initTimeLine()}
        {this.initLogTable()}
      </div>
    );
  }
}

export default ScriptStatus;
