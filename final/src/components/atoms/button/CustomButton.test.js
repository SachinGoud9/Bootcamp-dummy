import React from 'react';
import ReactDOM from 'react-dom';
import Mybutton from './CustomButton'

import { cleanup, fireEvent, render, screen} from '@testing-library/react'

afterEach(cleanup)

// describe('App', () => {
//     test('check the buttom name', () => {
//       const {getByTestId}=render(<Mybutton text = "Click Me"/>)
//       const name = getByTestId('button')
//       expect(name.textContent).toBe('Click Me')
//     })
//   })


//   describe('Checking the Button Click', () =>{
//     const handleClick = jest.fn();

//     it('Checking the Click', () => {
//       const {getByTestId} = render(<Mybutton
//         onClick = { handleClick }
//       />)
//       expect(getByTestId("button")).toBeTruthy();
//     });


//     it('Checking the Function Call', () => {
//       render(<Mybutton text = 'Add Job' onClick = {handleClick} />)

//       fireEvent.click(screen.getByText(/Add Job/i))
//       expect(handleClick).toHaveBeenCalledTimes(1);
//     })
//   })


it("render without crashing", ()=>{
  const div = document.createElement("div");
  ReactDOM.render(<Mybutton></Mybutton>,div)
})




