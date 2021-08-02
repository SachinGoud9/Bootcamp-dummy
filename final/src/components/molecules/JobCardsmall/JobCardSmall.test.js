import { render, screen, cleanup } from '@testing-library/react';
import JobCard from './JobCardSmall';



describe('Typography Rendered', () => {
    test('maindivinjobcardsmall', () => {
      render(<JobCard/>);
      const element = screen.getByTestId('maindivinjobcardsmall')
      expect(element).toBeTruthy();
    });
    test('cardinjobcardsmall', () => {
      render(<JobCard/>);
      const element = screen.getByTestId('cardinjobcardsmall')
      expect(element).toBeTruthy();
    });
    test('maingridinjobcardsmall', () => {
      render(<JobCard/>);
      const element = screen.getByTestId('maingridinjobcardsmall')
      expect(element).toBeTruthy();
    });
    test('firstgridinjobcardsmall', () => {
      render(<JobCard/>);
      const element = screen.getByTestId('firstgridinjobcardsmall')
      expect(element).toBeTruthy();
    });
    test('myimageinjobcardsmall', () => {
      render(<JobCard/>);
      const element = screen.getByTestId('myimageinjobcardsmall')
      expect(element).toBeTruthy();
    });
    test('secondgridinjobcardsmall', () => {
      render(<JobCard/>);
      const element = screen.getByTestId('secondgridinjobcardsmall')
      expect(element).toBeTruthy();
    });
    test('rolenameinjobcardsmall', () => {
      render(<JobCard/>);
      const element = screen.getByTestId('rolenameinjobcardsmall')
      expect(element).toBeTruthy();
    });
    test('companynameinjobcardsmall', () => {
      render(<JobCard/>);
      const element = screen.getByTestId('companynameinjobcardsmall')
      expect(element).toBeTruthy();
    });
    test('locationinjobcardsmall', () => {
      render(<JobCard/>);
      const element = screen.getByTestId('locationinjobcardsmall')
      expect(element).toBeTruthy();
    });
    test('thirdgridinjobcardsmall', () => {
      render(<JobCard/>);
      const element = screen.getByTestId('thirdgridinjobcardsmall')
      expect(element).toBeTruthy();
    });
    test('fourthgridinjobcardsmall', () => {
      render(<JobCard/>);
      const element = screen.getByTestId('fourthgridinjobcardsmall')
      expect(element).toBeTruthy();
    });
    test('innergridinjobcardsmall', () => {
      render(<JobCard/>);
      const element = screen.getByTestId('innergridinjobcardsmall')
      expect(element).toBeTruthy();
    });
    test('2dinjobcardsmall', () => {
      render(<JobCard/>);
      const element = screen.getByTestId('2dinjobcardsmall')
      expect(element).toBeTruthy();
    });
    test('iiner2divinjobcardsmall', () => {
      render(<JobCard/>);
      const element = screen.getByTestId('iiner2divinjobcardsmall')
      expect(element).toBeTruthy();
    });
    test('iconnameinjobcardsmall', () => {
      render(<JobCard/>);
      const element = screen.getByTestId('iconnameinjobcardsmall')
      expect(element).toBeTruthy();
    });
  });