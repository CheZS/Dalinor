import echarts from 'echarts';
import React from 'react';

class LineGraphTest extends React.Component {
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('my-chart'));
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
    myChart.setOption(option);
  }
  render() {
    return (
      <div id="my-chart"></div>
    );
  }
}

export default LineGraph;
