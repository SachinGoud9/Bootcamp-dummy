import { render, screen, cleanup } from '@testing-library/react';
import JobCardInfo from './JobCardInfo';



describe('Typography Rendered', () => {
    test('cardinjobcard', () => {
      render(<JobCardInfo/>);
      const element = screen.getByTestId('maindivinjobinfo')
      expect(element).toBeTruthy();
    });
    test('firstdivinjobinfo', () => {
      render(<JobCardInfo/>);
      const element = screen.getByTestId('firstdivinjobinfo')
      expect(element).toBeTruthy();
    });
    test('seconddivinjobinfo', () => {
      render(<JobCardInfo/>);
      const element = screen.getByTestId('seconddivinjobinfo')
      expect(element).toBeTruthy();
    });
    test('positiontypographyinjobinfo', () => {
      render(<JobCardInfo/>);
      const element = screen.getByTestId('positiontypographyinjobinfo')
      expect(element).toBeTruthy();
    });
    test('companytypographyinjobinfo', () => {
      render(<JobCardInfo/>);
      const element = screen.getByTestId('companytypographyinjobinfo')
      expect(element).toBeTruthy();
    });
    test('locationtypographyinjobinfo', () => {
      render(<JobCardInfo/>);
      const element = screen.getByTestId('locationtypographyinjobinfo')
      expect(element).toBeTruthy();
    });
  });