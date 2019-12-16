import React from 'react';
import App from './App'
import { render, fireEvent } from "@testing-library/react"

const originalError = console.error
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})


it("renders without crashing", () => {
  const container = render(<App />);
});


test('Navbar title displays correctly', () => {
  const { getByText } = render(<App />);
  getByText(/2019 Women's World Cup/i)
})



// test('Darkmode functions correctly', () => {
//   const { getByLabelText } = render(<App />);
//   fireEvent.click(getByText(/dark mode/i));
// })
