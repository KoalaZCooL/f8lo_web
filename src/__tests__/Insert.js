import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Insert from '../components/Insert';

const setup = () => {
  const input = render(<Insert />)
  return {
    input
  }
}

it('has a text input box', () => {
  const { input } = setup()
  const inputElement = input.container.getElementsByTagName('input')[0]
  expect(inputElement).toBeInTheDocument();
  expect(inputElement.getAttribute('type')).toBe('text')
  expect(inputElement.getAttribute('id')).toBe('ip')
});


it('will reject links that are not fabelio.com', async () => {
  const { input } = setup()
  const badLink = 'https://en.wikipedia.org/wiki/Fabolous'

  fireEvent.change(input.getByLabelText(/insert/i), { target: { value: badLink } })
  fireEvent.click(input.getByText(/submit/i))

  // just like a manual tester, we'll instruct our test to wait for the alert
  // to show up before continuing with our assertions.
  const alert = await input.findByRole('alert')

  // .toHaveTextContent() comes from jest-dom's assertions
  // otherwise you could use expect(alert.textContent).toMatch(/congrats/i)
  // but jest-dom will give you better error messages which is why it's recommended
  expect(alert).toHaveTextContent('invalid link')
})

it('will only accept a product page link from fabelio.com, then redirect to Page 3', async () => {
  const { input } = setup()
  const goodLink = 'https://fabelio.com/ip/kursi-kantor-alpha.html?ref=megamenu-ruangkerja-banner-link-1-1'

  fireEvent.change(input.getByLabelText(/insert/i), { target: { value: goodLink } })
  fireEvent.click(input.getByText(/submit/i))

  const alert = await input.findByRole('alert')

  expect(alert).toHaveTextContent('processing..')
})
