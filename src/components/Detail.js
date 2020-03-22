import React, { Component } from 'react';
import queryString from 'query-string';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const qparams = queryString.parse(window.location.search)
    fetch('https://f8lo.herokuapp.com/detail?url='+qparams.url)
      .then(response => response.json())
      .then(data => {
        this.setState(data);
      });//, () => console.log(this.state)
  }

  render() {
    return <div className="pageThree">
      <p>{this.state.description}</p>
      <p>IDR {this.state.last_price}</p>
      <img src={this.state.images} alt="page 3"></img>
      <LineChart
        width={640}
        height={300}
        data={this.state.prices}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="created_at" />
        <YAxis domain={['dataMin', 'dataMax']}/>
        <Tooltip />
        <Legend className="legend" />
        <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 4 }} />
      </LineChart>
    </div>;
  }
}

export default Detail;