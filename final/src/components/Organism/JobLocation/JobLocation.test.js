import { render, screen, cleanup } from '@testing-library/react';
import JobLocation from './JobLocation'

describe("jobLocation render correctly", () => {
    test("should match snapshot", () => {
      const { asFragment} = render(<JobLocation />);
      expect(asFragment()).toMatchSnapshot();
    });
    test('division rendered in JobLocation', () => {
        render(<JobLocation/>);
        const element = screen.getByTestId('topNavigation')
        expect(element).toBeTruthy();
      });
      test('grid rendered in JobLocation', () => {
        render(<JobLocation/>);
        const element = screen.getByTestId('grid')
        expect(element).toBeTruthy();
      });
});
