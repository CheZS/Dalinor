import React from 'react';
import ReactDOM from 'react-dom';
import vis from 'vis';

class NeuralNetwork extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // create an array with nodes
    var nodes = [];
    for (var i = 1; i <= 10; i++) {
        nodes.push({id: i, label: 'I' + i, level: 0, group: 1});//color: '#32CD32'
    }
    for (var i = 11; i <= 60; i++) {
        nodes.push({id: i, label: 'H' + i, level: 1, group: 2});//color: '#D3D3D3'
    }
    for (var i = 61; i <= 61; i++) {
        nodes.push({id: i, label: 'O' + i, level: 2, group: 3});//color: '#FF7F50'
    }
    nodes = new vis.DataSet(nodes);

    // create an array with edges
    var edges = [];
    for (var i = 1; i <= 10; i++) {
        for (var j = 11; j <= 60; j++) {
            edges.push({from: i, to: j});
        }
    }
    for (var i = 11; i <= 60; i++) {
        for (var j = 61; j <= 61; j++) {
            edges.push({from: i, to: j});
        }
    }
    edges = new vis.DataSet(edges);

    // create a network
    var container = document.getElementById('neural-network');

    // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
        layout: {
            hierarchical: {
                enabled: true,
                levelSeparation: 300
            }
        }
    };

    // initialize your network!
    var network = new vis.Network(container, data, options);
  }

  render() {
    return (
      <div id="neural-network"></div>
    );
  }
}

export default NeuralNetwork;
