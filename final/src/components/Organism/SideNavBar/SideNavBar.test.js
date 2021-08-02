import { render, screen, cleanup } from '@testing-library/react';
import SideNavBar from './SideNavBar';


afterEach(cleanup)

describe('Typography Rendered', () => {
  test('Head Typography In SideNavBar', () => {
    render(<SideNavBar/>);
    const element = screen.getByTestId('main')
    expect(element).toBeTruthy();
  });
  test('Checking heading Name in sideNavBar', () => {
    render(<SideNavBar/>);
    const element = screen.getByTestId('headingName')
    expect(element).toBeTruthy();
  });
  // test('Checking list in sideNavBar', () => {
  //   render(<SideNavBar/>);
  //   const element = screen.getByTestId('listItemIcon')
  //   expect(element).toBeTruthy();
  // });
});