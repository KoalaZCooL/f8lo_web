import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import List from '../components/List';

const setup = () => {
  const datatable = render(<List />)
  return {
    datatable
  }
}

it('has table headers "product description", "latest price", and "page 3"', () => {
  const { datatable } = setup()
  const tableHeaders = datatable.container.getElementsByClassName('tableHeaders')[0]
                                          .getElementsByClassName('tableCols')
  expect(tableHeaders[0]).toHaveTextContent('product description')
  expect(tableHeaders[1]).toHaveTextContent('latest price')
  expect(tableHeaders[2]).toHaveTextContent('page 3')
});

// it('will list all product page links submitted in Page 1', () => {
//   const { datatable } = setup()
//   const inputElement = input.container.getElementsByTagName('input')[0]
//   expect(inputElement).toBeInTheDocument();
//   expect(inputElement.getAttribute('type')).toBe('text')
//   expect(inputElement.getAttribute('id')).toBe('ip')
// });
