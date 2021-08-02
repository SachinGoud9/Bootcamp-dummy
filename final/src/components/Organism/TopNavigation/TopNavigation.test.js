import { render, screen, cleanup } from '@testing-library/react';
import TopNavigation from './TopNavigation';


afterEach(cleanup)

describe('div Rendered', () => {
  test('division rendered in TopNavigation', () => {
    render(<TopNavigation/>);
    const element = screen.getByTestId('topNavigation')
    expect(element).toBeTruthy();
  });
});