import React from 'react';
import Row from './Row'

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: this.props.links || [
        {desc: "Sofa 3 Dudukan Jobi (Blue)", price: "4499000", url: "https://fabelio.com/ip/jobi-3-seater-sofa-blue.html"},
        {desc: "Kursi Kantor Alpha", price: "699000", url: "https://fabelio.com/cp/ip/kursi-kantor-alpha.html"},
        {desc: "Set Tempat Tidur Fabelio Divan with Cloud Mattress", price: "3993000", url: "https://fabelio.com/ip/set-tempat-tidur-fabelio-divan-with-cloud-mattress.html"},
        {desc: "Set Meja Makan Mutoyo Mondy 4 Kursi", price: "6645250", url: "https://fabelio.com/ip/set-meja-makan-mutoyo-mondy-4-kursi.html"}
      ]
    };
  }
  
  createTable = () => {
    let table = []
    this.state.links.forEach(rowdt => {
      table.push(<Row key={rowdt.url} value={rowdt}/>)
    })
    return table
  }

  render() {
    return (
      <div className="pagetwo divTable">
        <div className="divTableBody">
          <div className="divTableRow tableHeaders">
            <div className="divTableCell">product description</div>
            <div className="divTableCell">latest price</div>
            <div className="divTableCell">details</div>
          </div>
          {this.createTable()}
        </div>
      </div>
    );
  }
}

export default List;