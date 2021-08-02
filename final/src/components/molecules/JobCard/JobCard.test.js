import { render, screen, cleanup } from '@testing-library/react';
import JobCard from './JobCard';


afterEach(cleanup)

describe('Typography Rendered', () => {
  test('cardinjobcard', () => {
    render(<JobCard/>);
    const element = screen.getByTestId('cardinjobcard')
    expect(element).toBeTruthy();
  });
  test('upperdivinjobcard', () => {
    render(<JobCard/>);
    const element = screen.getByTestId('upperdivinjobcard')
    expect(element).toBeTruthy();
  });
  test('innerdivinjobcard', () => {
    render(<JobCard/>);
    const element = screen.getByTestId('innerdivinjobcard')
    expect(element).toBeTruthy();
  });
  test('2dtypographyinjobcard', () => {
    render(<JobCard/>);
    const element = screen.getByTestId('2dtypographyinjobcard')
    expect(element).toBeTruthy();
  });
  test('morehorizoninjobcard', () => {
    render(<JobCard/>);
    const element = screen.getByTestId('morehorizoninjobcard')
    expect(element).toBeTruthy();
  });
  test('cardcontentinjobcard', () => {
    render(<JobCard/>);
    const element = screen.getByTestId('cardcontentinjobcard')
    expect(element).toBeTruthy();
  });
  test('rolenameinjobcard', () => {
    render(<JobCard/>);
    const element = screen.getByTestId('rolenameinjobcard')
    expect(element).toBeTruthy();
  });
  test('companynameinjobcard', () => {
    render(<JobCard/>);
    const element = screen.getByTestId('companynameinjobcard')
    expect(element).toBeTruthy();
  });
  test('locationinjobcard', () => {
    render(<JobCard/>);
    const element = screen.getByTestId('locationinjobcard')
    expect(element).toBeTruthy();
  });
  test('commuterouteinjobcard', () => {
    render(<JobCard/>);
    const element = screen.getByTestId('commuterouteinjobcard')
    expect(element).toBeTruthy();
  });
  test('iconnameinjobcard', () => {
    render(<JobCard/>);
    const element = screen.getByTestId('iconnameinjobcard')
    expect(element).toBeTruthy();
  });
});