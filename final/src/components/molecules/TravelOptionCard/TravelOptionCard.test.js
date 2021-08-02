import { render, screen, cleanup } from '@testing-library/react';
import TravelOptionCard from './TravelOptionCard';


afterEach(cleanup)

describe('TravelOption Rendered', () => {
  test('maingridintraveloptioncard', () => {
    render(<TravelOptionCard />);
    const element = screen.getByTestId("maingridintraveloptioncard")
    expect(element).toBeTruthy();
  });
  test('secondgridintraveloptioncard"', () => {
    render(<TravelOptionCard />);
    const element = screen.getByTestId("secondgridintraveloptioncard")
    expect(element).toBeTruthy();
  });
  test('thirdgridintraveloptioncard', () => {
    render(<TravelOptionCard />);
    const element = screen.getByTestId("thirdgridintraveloptioncard")
    expect(element).toBeTruthy();
  });
  test('fourthgridintraveloptioncard', () => {
    render(<TravelOptionCard />);
    const element = screen.getByTestId("fourthgridintraveloptioncard")
    expect(element).toBeTruthy();
  });
  test('fifthgridintraveloptioncard', () => {
    render(<TravelOptionCard />);
    const element = screen.getByTestId("fifthgridintraveloptioncard")
    expect(element).toBeTruthy();
  });
  test('typographyintraveloptioncard', () => {
    render(<TravelOptionCard />);
    const element = screen.getByTestId("typographyintraveloptioncard")
    expect(element).toBeTruthy();
  });
});