import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Row from '../components/Row';

const passdata = {title: "Sofa 3 Dudukan Jobi (Blue)", last_price: "4499000", url: "https://fabelio.com/ip/jobi-3-seater-sofa-blue.html"}
const setup = () => {
  const datarow = render(<Row key={passdata.url} value={passdata} />)
  return {
    datarow
  }
}

it('has table data for fields "product description", "latest price", and "page 3"', () => {
  const { datarow } = setup()
  expect(datarow.container.getElementsByClassName('description')[0]).toHaveTextContent(passdata.title)
  expect(datarow.container.getElementsByClassName('lastprice')[0]).toHaveTextContent(passdata.last_price)
  expect(datarow.container.getElementsByClassName('details')[0].innerHTML)
    .toMatch('<a href="/detail?url='+passdata.url+'">Page 3</a>')
});