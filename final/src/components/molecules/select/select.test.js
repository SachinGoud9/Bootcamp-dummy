import { render, screen, cleanup } from '@testing-library/react';
import CustomizedHook from './select';




describe('Typography Rendered', () => {
    test('nossrinselect', () => {
      render(<CustomizedHook/>);
      const element = screen.getByTestId('nossrinselect')
      expect(element).toBeTruthy();
    });
    test('1stdivinselect', () => {
      render(<CustomizedHook/>);
      const element = screen.getByTestId('1stdivinselect')
      expect(element).toBeTruthy();
    });
    test('2nddivinselect', () => {
      render(<CustomizedHook/>);
      const element = screen.getByTestId('2nddivinselect')
      expect(element).toBeTruthy();
    });
    test('inputwrapperinselect', () => {
      render(<CustomizedHook/>);
      const element = screen.getByTestId('inputwrapperinselect')
      expect(element).toBeTruthy();
    });
    test('3rddivinselect', () => {
      render(<CustomizedHook/>);
      const element = screen.getByTestId('3rddivinselect')
      expect(element).toBeTruthy();
    });
    test('imginselect', () => {
      render(<CustomizedHook/>);
      const element = screen.getByTestId('imginselect')
      expect(element).toBeTruthy();
    });
    test('taginselect', () => {
      render(<CustomizedHook/>);
      const element = screen.getByTestId('taginselect')
      expect(element).toBeTruthy();
    });
    test('input1inselect', () => {
      render(<CustomizedHook/>);
      const element = screen.getByTestId('input1inselect')
      expect(element).toBeTruthy();
    });
    test('listboxinselect', () => {
      render(<CustomizedHook/>);
      const element = screen.getByTestId('listboxinselect')
      expect(element).toBeTruthy();
    });
    test('li1inselect', () => {
      render(<CustomizedHook/>);
      const element = screen.getByTestId('li1inselect')
      expect(element).toBeTruthy();
    });
    test('span1inselect', () => {
      render(<CustomizedHook/>);
      const element = screen.getByTestId('span1inselect')
      expect(element).toBeTruthy();
    });
    test('checkinselect', () => {
      render(<CustomizedHook/>);
      const element = screen.getByTestId('checkinselect')
      expect(element).toBeTruthy();
    });
    test('4thinselect', () => {
      render(<CustomizedHook/>);
      const element = screen.getByTestId('4thinselect')
      expect(element).toBeTruthy();
    });
  });