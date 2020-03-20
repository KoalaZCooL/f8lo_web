import React, { Component } from 'react';
import queryString from 'query-string';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


class Detail extends Component {
  constructor(props) {
    super(props);
    let dataset = []
    for (let i = 0; i < 2*parseInt(Math.random()*100); i++) {
      dataset.push({
        time: i,
        price: 300000+parseInt(Math.random()*100000)
      });
    }
    this.state = {
      img: 'https://m2fabelio.imgix.net/catalog/product/cache/image/265x265/beff4985b56e3afdbeabfc89641a4582/5/_/5_64.jpg',
      desc: "Kursi Kantor Alpha",
      current_price: 399000,
      prices: dataset
    };
  }

  componentDidMount() {
    const qparams = queryString.parse(window.location.search)
    this.setState({url : qparams.url} )//, () => console.log(this.state)
  }

  render() {
    return <div className="pageThree">
      <p>{this.state.desc}</p>
      <p>IDR {this.state.current_price}</p>
      <img src={this.state.img} alt="page 3"></img>
      <LineChart
        width={640}
        height={300}
        data={this.state.prices}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis domain={['dataMin', 'dataMax']}/>
        <Tooltip />
        <Legend className="legend" />
        <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 4 }} />
      </LineChart>
    </div>;
  }
}

export default Detail;