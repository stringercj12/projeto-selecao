import React from 'react'
import { render, screen } from '@testing-library/react'
import { Book } from '.'

test('renders learn react link', () => {
//   render(<Book />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
