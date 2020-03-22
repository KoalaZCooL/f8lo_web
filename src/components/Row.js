import React from 'react';

export default class Row extends React.Component {
  render() {
    return (
      <div className="divTableRow">
        <div className="divTableCell description">
          {this.props.value.title}
        </div>
        <div className="divTableCell lastprice">
          {this.props.value.last_price}
        </div>
        <div className="divTableCell details">
          <a href={"/detail?url="+this.props.value.url}>Page 3</a>
        </div>
      </div>
    );
  }
}