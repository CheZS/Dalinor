import React from 'react';
import { Carousel, Progress, Row, Col } from 'antd';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Carousel className="home">
          <div>
            <Row>
              <Col span={8}>
                <Progress type="circle" percent={100} format={() => '流量特征'} />
              </Col>
              <Col span={8}>
                <Progress type="circle" percent={100} format={() => '流量识别'} />
              </Col>
              <Col span={8}>
                <Progress type="circle" percent={100} format={() => '流量调度'} />
              </Col>
            </Row>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </Carousel>
      </div>
    );
  }
}

export default Home;
