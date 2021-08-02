import { render, screen, cleanup } from '@testing-library/react';
import MyListItem from './MyListItem';



describe('Typography Rendered', () => {
    test('divinmylistitem', () => {
      render(<MyListItem/>);
      const element = screen.getByTestId('divinmylistitem')
      expect(element).toBeTruthy();
    });
    test('listiteminmylistitem', () => {
      render(<MyListItem/>);
      const element = screen.getByTestId('listiteminmylistitem')
      expect(element).toBeTruthy();
    });
    test('listitemiconinlistitem', () => {
      render(<MyListItem/>);
      const element = screen.getByTestId('listitemiconinlistitem')
      expect(element).toBeTruthy();
    });
    test('listitemtextinlistitem', () => {
      render(<MyListItem/>);
      const element = screen.getByTestId('listitemtextinlistitem')
      expect(element).toBeTruthy();
    });
  });