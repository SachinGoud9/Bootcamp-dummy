import { render, screen, cleanup } from '@testing-library/react';
import Right from './Right';


afterEach(cleanup)

describe('Items Rendered', () => {
  test('Head In RightGrid', () => {
    render(<Right/>);
    const element = screen.getByTestId('main')
    expect(element).toBeTruthy();
  });
 
//   test('Button testing in right', () => {
//     render(<Right/>);
//     const element = screen.getByTestId('button')
//     expect(element).toBeTruthy();
//   });
//   test('apply Button testing ', () => {
//     render(<Right/>);
//     const element = screen.getByTestId('Applybutton')
//     expect(element).toBeTruthy();
//   });
//   test('divider rendered in Right Grid', () => {
//     render(<Right/>);
//     const element = screen.getByTestId('divider')
//     expect(element).toBeTruthy();
//   });
});