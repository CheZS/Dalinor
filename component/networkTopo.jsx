import React from 'react';
import ReactDOM from 'react-dom';
import vis from 'vis';

class NetworkTopo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // create an array with nodes
    var nodes = [];
    for (var i = 1; i <= 16; i++) {
        nodes.push({id: i, label: 'H' + i, level: 4, group: 1});
    }
    for (var i = 101; i <= 108; i++) {
        nodes.push({id: i, label: 'A' + (i - 100), level: 3, group: 2});
    }
    for (var i = 201; i <= 208; i++) {
        nodes.push({id: i, label: 'I' + (i - 200), level: 2, group: 3});
    }
    for (var i = 301; i <= 304; i++) {
        nodes.push({id: i, label: 'C' + (i - 300), level: 1, group: 4});
    }
    nodes = new vis.DataSet(nodes);

    // create an array with edges
    var edges = [];
    for (var i = 1; i <= 16; i++) {
        edges.push({from: i, to: (Math.floor((i - 1) / 2) + 101)});
    }
    for (var i = 101; i <= 108; i++) {
        edges.push({from: i, to: i + 100});
        if (i % 2 === 0) {
            edges.push({from: i, to: (i + 99)});
        } else {
            edges.push({from: i, to: (i + 101)});
        }
    }
    for (var i = 201; i <= 208; i++) {
        if (i % 2 === 0) {
            edges.push({from: i, to: 302});
            edges.push({from: i, to: 304});
        } else {
            edges.push({from: i, to: 301});
            edges.push({from: i, to: 303});
        }
    }
    edges = new vis.DataSet(edges);

    // create a network
    var container = document.getElementById('network-topo');

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
      <div id="network-topo"></div>
    );
  }
}

export default NetworkTopo;
